import React, {useEffect, useState} from 'react';
import { Tooltip } from 'react-tooltip'
import "../styles/font.css";
import "../styles/colors.css";
import blueImg from "../assets/images/temp-blue.svg";
import foxImg from "../assets/images/temp-fox.svg";
import Download from "../components/DownCmp";
import winIco from "../assets/icons/win-icon.svg";
import linuxIco from "../assets/icons/linux-icon.svg";
import macIcoGray from "../assets/icons/mac-icon-gray.svg";
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
                <div className="container ">
                
                {!mobileView && (
                <div className={`about-title-layout row`}>
                    <div className="about-title col-lg-6 col-md-6">
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
                        <a className="action-button header-button fc-l" href = 'https://github.com/dokdo-sh/tymtLauncher' target='_blank' rel="noreferrer">
                            <span>Developer GitHub</span>
                        </a>
                    </div>
                    <div className="about-solar-logo col-lg-6 col-md-6">
                        <div className='solar-container'>
                            <img className="solar-img" alt="solar logo" src={blueImg} />
                            <img className='fox-img' alt='fox' src={foxImg}/>
                        </div>
                        
                        <div className='support-container'>
                            <span className='grey-color fc-m support-text'>Supported by:</span>
                            <div className='os-container'>
                                <div className='os-item'>
                                    <div>
                                        <img src= {winIco} alt='win icon'/>
                                    </div>
                                    <div className='fc-m white-color'>
                                        Windows
                                    </div>
                                </div>
                                <div className='os-item'>
                                    <div>
                                        <img src= {linuxIco} alt='win icon'/>
                                    </div>
                                    <div className='fc-m white-color'>
                                        Linux
                                    </div>
                                </div>
                                <div className='os-item' data-tooltip-id="my-tooltip-inline" data-tooltip-content="coming soon">
                                    <div>
                                        <img src= {macIcoGray} alt='win icon'/>
                                    </div>
                                    <div className='fc-m nav-color'>
                                        MacOS
                                    </div>
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
                        <p className='fs-p white-color'>
                            
                        </p>
                        {/* <div className="dropdown">
                            <div className="action-button download-button fc-l modal-button-disable">
                                <span></span>
                            </div>
                            <div className="dropdown-content">
                                <Download />
                            </div>
                        </div>  */}
                    </div>
                    <div className="about-solar-logo">
                        <div className='solar-container'>
                            <img className="solar-img" alt="solar logo" src={blueImg} />
                            <img className='fox-img' alt='fox' src={foxImg}/>
                        </div>
                    </div>
                    <p className='fs-p grey-color developer-text'>
                        If you are a developer and want to create or publish a game using the benefits of the Solar blockchain - check out our GitHub documentation.
                    </p>
                    <a className="action-button header-button fc-l" href = 'https://github.com/dokdo-sh/tymtLauncher' target='_blank' rel="noreferrer">
                        <span>Developer GitHub</span>
                    </a>
                    <div className='support-container'>
                        <span className='grey-color fc-m support-text'>Supported by:</span>
                        <div className='os-container'>
                            <div className='os-item'>
                                <div>
                                    <img src= {winIco} alt='win icon'/>
                                </div>
                                <div className='fc-m white-color'>
                                    Windows
                                </div>
                            </div>
                            <div className='os-item'>
                                <div>
                                    <img src= {linuxIco} alt='win icon'/>
                                </div>
                                <div className='fc-m white-color'>
                                    Linux
                                </div>
                            </div>
                            <div className='os-item' data-tooltip-id="my-tooltip-inline" data-tooltip-content="Coming Soon...">
                                <div>
                                    <img src= {macIcoGray} alt='win icon'/>
                                </div>
                                <div className='fc-m nav-color'>
                                    MacOS
                                </div>
                                <Tooltip id="my-tooltip-inline" isOpen={true} className='tooltiptext fc-m' place={'bottom-start'} style={{ borderRadius: '30px'}} />
                            </div>
                        </div>
                    </div>
                </>)}
            </div>
            </section>
    )
}

export default Home;