import React, {useEffect, useState} from 'react';
import "../styles/styles.css";
import { useNavigate } from "react-router-dom";
import Download from "../components/DownCmp";
import logo from "../assets/logos/logo-transp.png";
// import available from "../assets/images/availe.svg";
import available_mobile from "../assets/images/available-mobile.svg";


const Header = () =>{
    const navigate = useNavigate();
    function changeView () {
        const { innerWidth: width, innerHeight: height } = window;
        if(width <= 600 && height){
            return true;
        }else{
            return false;
        }
        
    }
    const [mobileView, setMobileView] = useState(changeView());
    useEffect(() => {
        function handleResize() {
            setMobileView(changeView());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return(
        <header className="header">
            <div className='row'>
                <div className="header-logo col-lg-7 col-md-6 col-sm-6" onClick={() => {navigate("/")}}>
                    <img src= {logo} className='header-logo-image' alt='logo'/>
                </div>
                <div className='header-button-group col-lg-5 col-md-6 col-sm-6'>
                    <a className="action-button header-button fc-l" href = 'https://github.com/dokdo-sh/tymtLauncher' target='_blank' rel="noreferrer">
                        <span>Developer GitHub</span>
                    </a>
                    <div className="dropdown">
                        {!mobileView && <div className="action-button download-button fc-l">    
                            Install and Play now
                        </div>}
                        {/* {mobileView && <div className="download-button fc-l modal-button-disable">    
                            Not supported
                        </div>} */}
                        
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