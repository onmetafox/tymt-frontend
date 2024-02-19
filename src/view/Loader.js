import React from "react";
import LineLoader from "../components/LineLoader";
import 'react-toastify/dist/ReactToastify.css';
import logo from "../assets/logos/logo-transp.png";
import "../styles/styles.css";
import "../styles/font.css";

const Loader = () => {
  return (
    <div className="loader">
      <LineLoader />
      <div className="about-right-light blink loader-sparkle-right"></div>
      <div className="about-left-light blink delayed-animation loader-sparkle-left"></div>
      <div className="logo-container">
        <img src= {logo} className='header-logo-image' alt='logo'/>
      </div>
    </div>
  );
};

export default Loader;