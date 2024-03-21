
import React, { useCallback, useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from 'react-redux';
import { Link as Href } from 'react-router-dom';
import logo from "../assets/logos/logo.svg";
import menuIcon from "../assets/icons/menu-icon.svg";
import closeMenuIcon from "../assets/icons/cross-icon.svg"

import { OS } from "../utils/getEnv";
import DownloadComp from "../components/downloadComp";
import ModalComp from '../components/modalComp';
import { Link } from 'react-scroll';
import { setLang, getLang } from '../utils/languageSlice';
const Header = () => {
    const dispatch = useDispatch()
    const lang = useSelector(getLang);
    const {
        t,
        i18n: { changeLanguage }
    } = useTranslation();
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
    const setLanguage = useCallback((language)=>{
        if(lang === language)
            return ;
        dispatch(setLang(language));
        changeLanguage(language);
        // window.location = "/";
    },[lang, changeLanguage, dispatch]);

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
            <Navbar.Brand as={Href} to='/'>
                <img
                    src={logo}
                    className="d-inline-block align-top header-logo"
                    alt="tymt website logo"
                />
            </Navbar.Brand>
        
            <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                <Nav.Link as={Link} onClick={()=>setIsOpen(false)}  to="featured" smooth={true} duration={500} className='fs-16 white m-lr-10'>{t("header-about")}</Nav.Link>
                <Nav.Link as={Link} onClick={()=>setIsOpen(false)} to="how-to-install" smooth={true} duration={500} className='fs-16 white m-lr-10'>{t("how-it-works")}</Nav.Link>
                <Nav.Link as={Link} onClick={()=>setIsOpen(false)} to="publisher" smooth={true} duration={500} className='fs-16 white m-lr-10'>{t("publishers")}</Nav.Link>
                <Nav.Link onClick={()=>{setShow(true); setIsOpen(false)}} style={{display: 'block'}} className={`${osBtn} black-btn fs-18 header-btn bold-semi white m-lr-10`}>
                    {t("contact-us")}
                </Nav.Link>
                {!isMobile && 
                    <div onClick={()=>setIsOpen(false)} style={{display: 'block'}} className={`${osBtn} download-btn header-btn red-btn fs-18 bold-semi white m-lr-10`}>
                        {t("install-and-play-now")}
                        <div className="dropdown-content">
                            <DownloadComp />
                        </div>
                    </div>
                }
                <Nav.Link>
                    <div className='d-flex justify-content-center align-items-senter' style={{gap:'2px'}}>
                        <div onClick={()=>{setLanguage("en"); setIsOpen(false)}} className={`${osBtn} ${lang==="en"?"active": ""}  lang-btn fs-18 bold-semi gray`}>
                            Eng
                        </div>
                        <div onClick={()=>{setLanguage("jp"); setIsOpen(false)}} className={`${osBtn}  ${lang==="jp"?"active": ""} lang-btn fs-18 bold-semi gray`}>
                            {/* {t("jap")} */}
                            日本
                        </div>
                    </div>
                </Nav.Link>
            
                
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