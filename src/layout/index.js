import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const MainLayout = () => {
    return(
        <div id="app" className='body'>
            <Header/>
            <div style={{minHeight: "calc(100vh - 145px)", display:'flex', flexDirection: 'column',}}>
                <Outlet />
            </div>
            <Footer/>
        </div>
    )
}

export default MainLayout;