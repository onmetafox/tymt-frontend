import React from 'react';
import "../styles/styles.css";
import discordIcon from '../assets/icons/discord-icon.png'
import telegramIcon from '../assets/icons/telegram-icon.png'
import twitchIcon from '../assets/icons/twitch-icon.png'
import facebookIcon from '../assets/icons/facebook-icon.png'
import { useNavigate } from "react-router-dom";
import JoinWaitListBtn from "../components/JoinWaitlistBtn";

const Contact = () =>{
    const navigate = useNavigate();

    return(
        <section id="contact" className="contact">
            <div className='contact-layout'>
                <div className='contact-title'>
                    <JoinWaitListBtn classes={['contact-join-button']}/>
                </div>
                <div className='contact-info'>
                    <div className='fc-m grey-color text-uppercase'>
                        Reach us ON DISCORD
                    </div>
                    <div className='fc-l2-Italic hover-white-color action-button discord-group' style={{marginBottom: "10px"}}>
                        <img alt="discord" className='social-icon ' src={discordIcon} /> {" "} 
                        <span style={{marginLeft:"10px"}}>
                            tymt
                        </span>
                    </div>
                    <div className='fc-m grey-color text-uppercase'>
                        Reach us ON SOCIAL MEDIA
                    </div>
                    <div className='contact-social-icon-group'>
                        <div className='tooltip'>
                            <img alt="twitch" className='social-icon-small action-button' src={facebookIcon}></img>
                            <span className="tooltiptext fc-m">Coming Soon</span>
                        </div>
                        <div className='tooltip'>
                            <img alt="twitch" className='social-icon-small action-button' src={twitchIcon}></img>
                            <span className="tooltiptext fc-m">Coming Soon</span>
                        </div>
                        <div className='tooltip'>
                            <img alt="telegram" className='social-icon-small action-button' src={telegramIcon}></img>
                            <span className="tooltiptext fc-m">Coming Soon</span>
                        </div>
                        <div className='tooltip'>
                            <div alt="x" className='social-icon-small social-x action-button' onClick={e=>window.open('https://twitter.com/tymt_com', '_blank')}></div>
                        </div>
                    </div>
                    <div className='fc-m grey-color text-uppercase' style={{marginTop: "20px", marginBottom: "15px"}}>
                        Contact us
                    </div>
                    <div className='fc-l2-Italic hover-main-color action-button'>
                        <div className="action-button header-button fc-m2" onClick={() => navigate('contactForm')} >Contact us</div>
                    </div>
                </div>
            </div>
            <div className='contact-left-light blink'></div>
            <div className='contact-right-light blink delayed-animation'></div>
        </section >
    )
}

export default Contact;