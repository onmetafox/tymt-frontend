
import React, { useCallback, useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
import { useTranslation } from "react-i18next";
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

import logo from "../assets/logos/logo.svg";
import menuIcon from "../assets/icons/menu-icon.svg";
import closeMenuIcon from "../assets/icons/cross-icon.svg"

import { OS } from "../utils/getEnv";
import DownloadComp from "../components/downloadComp";
import ModalComp from '../components/modalComp';
import { Link } from 'react-scroll';
const Header = () => {
    const { t } = useTranslation();
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
                        <Nav.Link as={Link}  to="home" smooth={true} duration={500} className='fs-16 white m-lr-10'>{t("header-about")}</Nav.Link>
                        <Nav.Link as={Link}  to="how-to-install" smooth={true} duration={500} className='fs-16 white m-lr-10'>{t("how-it-works")}</Nav.Link>
                        <Nav.Link as={Link}  to="publisher" smooth={true} duration={500} className='fs-16 white m-lr-10'>{t("publishers")}</Nav.Link>
                        <Nav.Link onClick={()=>setShow(true)} style={{display: 'block'}} className={`${osBtn} black-btn fs-18 header-btn bold-semi white m-lr-10`}>
                            {t("contact-us")}
                        </Nav.Link>
                        {!isMobile && 
                            <Nav.Link as={Link}  to="/" style={{display: 'block'}} className={`${osBtn} download-btn header-btn red-btn fs-18 bold-semi white m-lr-10`}>
                                {t("install-and-play-now")}
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