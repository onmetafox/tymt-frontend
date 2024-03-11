import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

const MainLayout = () => {
    return(
        <div id="app" className='body'>
            <div className='mobile-bg'></div>
            <div className="home-left-light blink"></div>
            <div className="home-right-light blink delayed-animation"></div>
            <Header/>
            <Outlet />
            <Footer/>
        </div>
    )
}

export default MainLayout;