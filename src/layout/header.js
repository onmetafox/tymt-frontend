
import React, { useCallback, useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

import logo from "../assets/logos/logo.svg";
import menuIcon from "../assets/icons/menu-icon.svg";
import closeMenuIcon from "../assets/icons/cross-icon.svg"

import { OS } from "../utils/getEnv";
import DownloadComp from "../components/downloadComp";
import ModalComp from '../components/modalComp';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scroll, setScroll] = useState(false)
    const [osBtn, setOsBtn] = useState("common-btn-win");
    const [show, setShow] = useState(false);
    const [os] = useState(OS(window));

    const setOpen = useCallback((status)=>{
        setShow(status)
    }, [setShow]);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    
    useEffect(()=>{
        if(os==="Windows OS"){
            setOsBtn("common-btn-win");
        }else{
            setOsBtn("common-btn-linux");
        }
    },[os]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <Navbar variant="dark" expand="lg" className={`container header-container navbar-a ${isOpen ? 'active' : ''} ${scroll? 'scroll-header': ''}`} expanded = {isOpen}>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={logo}
                        className="d-inline-block align-top header-logo"
                        alt="tymt website logo"
                    />
                </Navbar.Brand>
            
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                        <Nav.Link as={Link} onClick={toggleNavbar} to="/" className='fs-16 white m-lr-10'>About</Nav.Link>
                        <Nav.Link as={Link} onClick={toggleNavbar} to="/" className='fs-16 white m-lr-10'>How it Works</Nav.Link>
                        <Nav.Link as={Link} onClick={toggleNavbar} to="/" className='fs-16 white m-lr-10'>Publishers</Nav.Link>
                        <Nav.Link onClick={()=>setShow(true)} className={`${osBtn} black-btn fs-18 header-btn bold-semi white m-lr-10`}>
                            Contact Us
                        </Nav.Link>
                        {!isMobile && 
                            <Nav.Link as={Link} onClick={toggleNavbar} to="/" className={`${osBtn} download-btn header-btn red-btn fs-18 bold-semi white m-lr-10`}>
                                Install and Play now
                                <div className="dropdown-content">
                                    <DownloadComp />
                                </div>
                            </Nav.Link>
                        }
                    {/* </div> */}
                    
                    
                </Navbar.Collapse>
                <Nav className='mobile-toggle-wrapper'>
                    <Navbar.Toggle onClick={toggleNavbar} aria-controls="basic-navbar-nav">
                    {isOpen ? (
                        <img src={closeMenuIcon} alt='Close' />
                    ) : (
                        <img src={menuIcon} alt='Open' />
                    )}
                    </Navbar.Toggle>
                </Nav>
                <ModalComp open = {show} setOpen = {setOpen}/>
        </Navbar>
    );
}

export default Header;