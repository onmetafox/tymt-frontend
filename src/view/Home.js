import React, {useEffect, useState} from 'react';
import "../styles/styles.css";
import "../styles/font.css";
import "../styles/colors.css";
import solarImage from "../assets/images/temp-img.svg";
import tempImg from "../assets/images/temp-img-sm.svg";
import Download from "../components/DownCmp";
const Home = () => {
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
        <section id="home" className="home home-section">
            <div className='mobile-bg'></div>
                <div className="container ">
                <div className="about-right-light blink"></div>
                <div className="about-left-light blink delayed-animation"></div>
                {!mobileView && (
                <div className={`about-title-layout`}>
                    <div className="about-title">
                        <div className="color-about-title">
                            <span className="h2-italic white-color">Ready to</span>
                            <br />
                            <span className="h2-italic white-color" style={{whiteSpace: "nowrap"}}>explore</span>
                            <br/>
                            <span className="h2-italic blue-color">tymt?</span>
                        </div>
                        <p className='fs-p white-color'>
                            We are developing the next generation Game Launcher that bridges the gaps between blockchain and traditional gaming.
                        </p>
                        <div className="dropdown">
                            <div className="action-button download-button fc-m2">
                                <span>Install and Play now</span>
                            </div>
                            <div className="dropdown-content">
                                <Download />
                            </div>
                        </div> 
                        <p className='fs-p grey-color'>
                            If you are a developer and want to create or publish a game using the benefits of the Solar blockchain - check out our GitHub documentation.
                        </p>
                        <div className="action-button header-button fc-m2">
                            <span>Developer GitHub</span>
                        </div>
                    </div>
                    <div className="about-solar-logo">
                        <img alt="solar logo" src={solarImage} />
                    </div>
                </div>
                )}
                {mobileView && (<>
                    <div className="about-title">
                        <div className="color-about-title">
                            <span className="h2-italic white-color">Ready to</span>
                            <br />
                            <span className="h2-italic white-color" style={{whiteSpace: "nowrap"}}>explore</span>
                            <br/>
                            <span className="h2-italic blue-color">tymt?</span>
                        </div>
                        <p className='fs-p white-color'>
                            We are developing the next generation Game Launcher that bridges the gaps between blockchain and traditional gaming.
                        </p>
                        <div className="dropdown">
                            <div className="action-button download-button fc-m2">
                                <span>Install and Play now</span>
                            </div>
                            <div className="dropdown-content">
                                <Download />
                            </div>
                        </div> 
                    </div>
                    <div className="about-solar-logo">
                        <img alt="solar logo" src={tempImg} />
                    </div>
                    <p className='fs-p grey-color developer-text'>
                        If you are a developer and want to create or publish a game using the benefits of the Solar blockchain - check out our GitHub documentation.
                    </p>
                    <div className="action-button header-button fc-m2">
                        <span>Developer GitHub</span>
                    </div>
                </>)}
            </div>
            </section>
    )
}

export default Home;