import React from 'react';
// import "../styles/styles.css";
import Header from '../view/Header';
import Home from '../view/Home';
// import Benefit from '../view/Benefit';
// import About from '../view/About';
// import Navbar from '../components/Navbar';
// import Features from '../view/Features';
// import Faq from '../view/Faq';
import Footer from '../view/Footer';
// import Contact from '../view/Contact';
// import Roadmap from '../view/Roadmap'
// import HowitWorks from '../view/HowWorks'
// import GetFree from '../view/GetFree';

const MainLayout = () => {
    return(
        <div id="app" className='body'>
            <div className="home-left-light blink"></div>
            <div className="home-right-light blink delayed-animation"></div>
            <div className='header-nav fc-m2 line-height-1-2'>Welcome to our temporary site!  We're currently in the process of developing a new and improved website to enhance your experience.</div>
            <div className='container'>
                <Header/>
                <Home/>
                <Footer/>
            </div>
        </div>
    )
}

export default MainLayout;