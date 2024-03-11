import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

const MainLayout = () => {
    return(
        <div id="app" className='body'>
            <Header/>
            <div style={{minHeight: "calc(100vh - 145px)"}}>
                <Outlet />
            </div>
            <Footer/>
        </div>
    )
}

export default MainLayout;