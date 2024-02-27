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
            <Header/>
            {/* <Navbar/> */}
            <Home/>
            {/* <Benefit/> */}
            {/* <About/> */}
            {/* <Features/> */}
            {/* <HowitWorks/> */}
            {/* <GetFree/> */}
            {/* <Faq/> */}
            {/* <Roadmap/> */}
            {/* <Contact/> */}
            <Footer/>
        </div>
    )
}

export default MainLayout;