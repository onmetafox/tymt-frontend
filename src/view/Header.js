import React from 'react';
import "../styles/styles.css";
import { useNavigate } from "react-router-dom";
import Download from "../components/DownCmp";
import logo from "../assets/logos/logo-transp.png";
import available from "../assets/images/availe.svg";
import available_mobile from "../assets/images/available-mobile.svg";


const Header = () =>{
    const navigate = useNavigate();
    return(
        <header className="header">
            <div className='header-nav fc-m2 line-height-1-2'>Welcome to our temporary site!  We're currently in the process of developing a new and improved website to enhance your experience.</div>
            <div className='header-container'>
                <div className="header-logo" onClick={() => {navigate("/")}}>
                    <img src= {logo} className='header-logo-image' alt='logo'/>
                </div>
                <div className='header-button-group'>
                    <div className="action-button header-button fc-m2">
                        Developer GitHub
                    </div>   
                    <div className="dropdown">
                        <div className="action-button download-button fc-m2">
                            Install and Plan now
                        </div>
                        <div className="dropdown-content">
                            <Download />
                        </div>
                    </div> 
                    
                </div>    
            </div>
            <div className="available-mobile" onClick={() => {navigate("/")}}>
                <img src= {available_mobile} className="available-mobile-image" alt='logo'/>
            </div>   
        </header>
    )
}

export default Header;