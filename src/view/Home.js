import React, {useEffect, useState} from 'react';
import { Tooltip } from 'react-tooltip'
// import "../styles/styles.css";
import "../styles/font.css";
import "../styles/colors.css";
import solarImage from "../assets/images/temp-img.svg";
import tempImg from "../assets/images/temp-img-sm.svg";
import Download from "../components/DownCmp";
import winIco from "../assets/icons/win-icon.svg";
import linuxIco from "../assets/icons/linux-icon.svg";
import macIco from "../assets/icons/mac-icon.svg";
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
                            <div className="action-button download-button fc-l">
                                Install and Play now
                            </div>
                            <div className="dropdown-content">
                                <Download />
                            </div>
                        </div> 
                        <p className='fs-p grey-color'>
                            If you are a developer and want to create or publish a game using the benefits of the Solar blockchain - check out our GitHub documentation.
                        </p>
                        <div className="action-button header-button fc-l">
                            <span>Developer GitHub</span>
                        </div>
                    </div>
                    <div className="about-solar-logo">
                        <img className="solar-img" alt="solar logo" src={solarImage} />
                        <div className='support-container'>
                            <span className='grey-color fc-m support-text'>Supported by:</span>
                            <div className='os-container'>
                                <div className='os-item'>
                                    <img src= {winIco} width={24} alt='win icon'/>
                                    <span className='fc-m white-color'>Windows</span>
                                </div>
                                <div className='os-item'>
                                    <img src= {linuxIco} width={24} alt='linux icon'/>
                                    <span className='fc-m white-color'>Linux</span>
                                </div>
                                <div className='os-item' data-tooltip-id="my-tooltip-inline" data-tooltip-content="Coming Soon...">
                                    <img src= {macIco} width={24} alt='mac icon'/>
                                    <span className='fc-m white-color'>MacOS</span>
                                    <Tooltip  id="my-tooltip-inline" className='tooltiptext fc-m' style={{borderRadius: '30px'}}/>
                                </div>
                            </div>
                        </div>
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
                            <div className="action-button download-button fc-l">
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
                    <div className="action-button header-button fc-l">
                        <span>Developer GitHub</span>
                    </div>
                    <div className='support-container'>
                        <span className='grey-color fc-m support-text'>Supported by:</span>
                        <div className='os-container'>
                            <div className='os-item'>
                                <img src= {winIco} width={19} alt='win icon'/>
                                <span className='fc-m white-color'>Windows</span>
                            </div>
                            <div className='os-item'>
                                <img src= {linuxIco} width={19} alt='linux icon'/>
                                <span className='fc-m white-color'>Linux</span>
                            </div>
                            <div className='os-item tooltip'>
                                <img src= {macIco} width={19} alt='mac icon'/>
                                <span className='fc-m white-color'>MacOS</span>
                                <span className="tooltiptext fc-m">Coming Soon</span>
                            </div>
                        </div>
                    </div>
                </>)}
            </div>
            </section>
    )
}

export default Home;