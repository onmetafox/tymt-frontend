import React from 'react';
import Header from '../view/Header';
import Home from '../view/Home';
import Footer from '../view/Footer';

const MainLayout = () => {
    return(
        <div id="app" className='body'>
            <div className='mobile-bg'></div>
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