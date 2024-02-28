import React from "react";
// import { Link } from 'react-scroll';
// import { Link as Navi } from 'react-router-dom'

import "../styles/styles.css";
// import discordIcon from '../assets/icons/discord-icon.png'
// import telegramIcon from '../assets/icons/telegram-icon.png'
// import twitchIcon from '../assets/icons/twitch-icon.png'
// import facebookIcon from '../assets/icons/facebook-icon.png'


const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer-layout">
          <div className="footer-copyright color-gray">
            <p className="fc-m grey-color" style={{whiteSpace: "nowrap"}}>©2024. All right reserved.</p>
            <div className="fc-m">
              <p className="fc-m hover-gray-color grey-color footer-right">
                The first game available on tymt is District 53 - a voxel-based game, based on the Mintetest engine.<br/>
                It’s free to access, free for all, free to play, free to build - AND players can earn rewards while playing it!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
