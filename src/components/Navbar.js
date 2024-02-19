import React, { useState, useEffect } from 'react'
import "../styles/styles.css";
import "../styles/colors.css";
import { Link } from 'react-scroll';

const Navbar = () =>{
    const [showNavbar, setShowNavbar] = useState(false);
    const [currentSection, setCurrentSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setShowNavbar(scrollPosition > 0);

            const sections = document.querySelectorAll('section');
            let currentSectionId = '';
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                    currentSectionId = section.id;
                    console.log(currentSectionId);
                    if(currentSectionId === ""){
                        console.log("window.pageYOffset ",window.pageYOffset);
                        console.log("sectionTop ", sectionTop);
                        console.log("sectionTop + sectionHeight ", sectionTop + sectionHeight);
                    }
                }
            });
            setCurrentSection(currentSectionId);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    return(
        <div className="nav" style={{opacity: !showNavbar ? 0 : 1}}>
            <div className="navbar fc-m nav-color">
                <Link style={{color: currentSection === 'home' ? '#EF4444' : '#7C7C7C'}}  to="home" smooth={true} duration={500}>tymt</Link>
                <Link style={{color: currentSection === 'benefit' ? '#EF4444' : '#7C7C7C'}}  to="benefit" smooth={true} duration={500}>Benefits</Link>
                <Link style={{color: currentSection === 'about' ? '#EF4444' : '#7C7C7C'}}  to="about" smooth={true} duration={500}>About</Link>
                <Link style={{color: currentSection === 'features' ? '#EF4444' : '#7C7C7C'}}  to="features" smooth={true} duration={500}>Features</Link>
                <Link style={{color: currentSection === 'howitworks' ? '#EF4444' : '#7C7C7C'}}  to="howitworks" smooth={true} duration={500}>How it Works</Link>
                <Link style={{color: currentSection === 'getfree' ? '#EF4444' : '#7C7C7C'}}  to="getfree" smooth={true} duration={500}>Join Us</Link>
                <Link style={{color: currentSection === 'faq' ? '#EF4444' : '#7C7C7C'}}  to="faq" smooth={true} duration={500}>FAQ</Link>
                {/* <Link style={{color: currentSection === 'roadmap' ? '#EF4444' : '#7C7C7C'}}  to="roadmap" smooth={true} duration={500}>Roadmap</Link> */}
                <Link style={{color: currentSection === 'contact' ? '#EF4444' : '#7C7C7C'}}  to="contact" smooth={true} duration={500}>Contacts</Link>
            </div>
        </div>
    )
}

export default Navbar;