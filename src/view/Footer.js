import React from "react";
import { Link } from 'react-scroll';
import { Link as Navi } from 'react-router-dom'

import "../styles/styles.css";
import discordIcon from '../assets/icons/discord-icon.png'
import telegramIcon from '../assets/icons/telegram-icon.png'
import twitchIcon from '../assets/icons/twitch-icon.png'
import facebookIcon from '../assets/icons/facebook-icon.png'


const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer-layout">
          <hr className="horizontal-stick-footer"></hr>
          <div className="footer-logo"></div>
          <div className="footer-left-layout">
            <div className="footer-contact-info">
              <div>
                <div className="footer-discord-info">
                  <div className="fc-m color-gray text-uppercase">REACH US ON DISCORD</div>
                  <div className="discord-group">
                      <img alt="discord" className="discordLogo " src={discordIcon}></img>
                      <span className="fc-l action-button"> tymt</span>
                  </div>
                </div>

                <div className="footer-discord-info">
                  <div className="fc-m color-gray text-uppercase">REACH US ON SOCIAL MEDIA</div>
                  <div className="footer-socials">
                    <div className='tooltip'>
                      <img alt="twitch" src={facebookIcon} className="footer-social action-button"></img>
                      <span className="tooltiptext fc-m">Coming Soon</span>
                    </div>
                    <div className='tooltip'>
                      <img alt="twitch" src={twitchIcon} className="footer-social action-button"></img>
                      <span className="tooltiptext fc-m">Coming Soon</span>
                    </div>
                    <div className='tooltip'>
                      <img alt="telegram" src={telegramIcon} className="footer-social action-button"></img>
                      <span className="tooltiptext fc-m">Coming Soon</span>
                    </div>
                    <div className='tooltip'>
                      <div alt="x" className='footer-social social-x action-button' onClick={e=>window.open('https://twitter.com/tymt_com', '_blank')}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-links">
              <div className="footer-nav">
                <div className="footer-games-container">
                  <div className="foot-1">
                    <div className="fc-l-Italic fw-b">tymt</div>
                    <div className="footer-nav-wrapper">
                      <Link className="fc-m hover-gray-color action-button" to="home" smooth={true} duration={500} offset={-50}>Home</Link>
                      <Link className="fc-m hover-gray-color action-button" to={"faq"} smooth={true} duration={500} offset={-50}>FAQ</Link>
                      <Link className="fc-m hover-gray-color action-button" to={"about"} smooth={true} duration={500} offset={-50}>About</Link>
                      <Link className="fc-m hover-gray-color action-button" to={"contact"} smooth={true} duration={500} offset={-50}>Contact Us</Link>
                    </div>
                  </div>
                  <div className="foot-2">
                    <div className="fc-l-Italic display-inline fw-b" style={{paddingLeft: "5px"}}>games</div>
                    <div className='tooltip'>
                      <div className="fc-m footer-game-icon">District 53</div>
                      <span className="tooltiptext fc-m">Coming Soon</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright color-gray">
            <div className="fc-m">©2024 DOKDO. All right reserved.</div>
            <div className="fc-m p-r-50">
              <Navi className="fc-m hover-gray-color grey-color action-button" to="/privacy">Privacy Policy</Navi> &nbsp;&nbsp; 
              <Navi className="fc-m hover-gray-color grey-color action-button" to="/terms">Terms of Service</Navi>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
