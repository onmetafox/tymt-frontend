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
            <div className='header-nav fc-m2 line-height-1-2'>Join Waitlist to be the first person who will receive the access to V2 of tymt and just to be updated</div>
            <div className='header-container'>
                <div className="header-logo" onClick={() => {navigate("/")}}>
                    <img src= {logo} className='header-logo-image' alt='logo'/>
                </div>
                <div className='header-button-group'>
                    <div className="available" onClick={() => {navigate("/")}}>
                        <img src= {available} width={150} alt='logo'/>
                    </div>
                    <div className="dropdown">
                        <div className="action-button download-button fc-m2">
                            <span>Download</span></div>
                        <div className="dropdown-content">
                            <Download />
                        </div>
                    </div>      
                    <div className="action-button header-button fc-m2" onClick={() => navigate('waitlist')}><span style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>Join Waitlist</span></div>
                </div>    
            </div>
            <div className="available-mobile" onClick={() => {navigate("/")}}>
                    <img src= {available_mobile} className="available-mobile-image" alt='logo'/>
                </div>   
        </header>
    )
}

export default Header;