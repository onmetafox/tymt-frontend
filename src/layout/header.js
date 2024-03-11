
import React, { useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import logo from "../assets/logos/logo.svg";
import menuIcon from "../assets/icons/menu-icon.svg";
import closeMenuIcon from "../assets/icons/cross-icon.svg"

import { OS } from "../utils/getEnv";

import DownloadComp from "../components/downloadComp";
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [osBtn, setOsBtn] = useState("common-btn-win");
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    const navigate = useNavigate();
    const [os] = useState(OS(window));
    useEffect(()=>{
        if(os==="Windows OS"){
            setOsBtn("common-btn-win");
        }else{
            setOsBtn("common-btn-linux");
        }
    },os)
    return (
        <Navbar variant="dark" expand="lg" className={`container header-container navbar-a ${isOpen ? 'active' : ''}`} expanded = {isOpen}>
            {/* <div className='row'> */}
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={logo}
                        className="d-inline-block align-top header-logo"
                        alt="tymt website logo"
                    />
                </Navbar.Brand>
            
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    {/* <div className='d-flex justify-content-center col-6'> */}
                        <Nav.Link as={Link} onClick={toggleNavbar} to="/" className='fs-16 white m-lr-10'>About</Nav.Link>
                        <Nav.Link as={Link} onClick={toggleNavbar} to="/" className='fs-16 white m-lr-10'>How it Works</Nav.Link>
                        <Nav.Link as={Link} onClick={toggleNavbar} to="/" className='fs-16 white m-lr-10'>Publishers</Nav.Link>
                    {/* </div> */}
                    {/* <div className='d-flex justify-content-end col-6'> */}
                        
                        <Nav.Link as={Link} onClick={toggleNavbar} to="/" className={`${osBtn} black-btn fs-18 btn bold-semi white m-lr-10`}>
                            Contact Us
                        </Nav.Link>
                        
                        {!isMobile && 
                            <Nav.Link as={Link} onClick={toggleNavbar} to="/" className={`${osBtn} download-btn btn red-btn fs-18 bold-semi white m-lr-10`}>
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
            {/* </div> */}
        </Navbar>
    );
}

export default Header