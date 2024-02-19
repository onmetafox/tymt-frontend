import React, { useEffect, useState, useRef } from "react";
import "../styles/styles.css";
import solarImage from "../assets/images/solar-image.svg";
// import kucoinLogo from "../assets/logos/kucoin-logo.png";
// import bitgetLogo from "../assets/logos/bitget-logo.png";
// import binanceLogo from "../assets/logos/binance-logo.png";
// import bitstampLogo from "../assets/logos/bitstamp-logo.png";
// import solanaLogo from "../assets/logos/solana-logo.png";
// import polygonLogo from "../assets/logos/polygon-logo.png";
// import solarLogo from "../assets/logos/solar-logo.png";
import aboutLeft from "../assets/icons/about-left.svg";
import aboutRight from "../assets/icons/about-right.svg";

const About = () => {
  const textRef = useRef();
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const domRefValue = domRef.current;
    let observerRefValue = null;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRefValue);
    observerRefValue = domRefValue;
    return () => {
      if (observerRefValue) observer.unobserve(observerRefValue);
    };
  }, []);


  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-right-light blink"></div>
        <div className="about-left-light blink delayed-animation"></div>
        <div className={`about-title-layout`}>
          <div className="about-title">
            <div className="color-about-title">
              <span className="h2-italic">what</span> &nbsp; &nbsp;
              <span className="h2-italic main-color">is</span>
              <br />
              <span className="h2-italic blue-color">tymt</span>
              <span className="h2-italic">...?</span>
            </div>
            <div
              id="color-changing-text"
              className="fs-p about-span-color"
              ref={textRef}
            >
              This next-generation game launcher bridges the gap between traditional, and Web3 games, overcoming the challenges that have often hampered blockchain gaming. 
              <br />
              <br />
              This platform provides a unique solution for games across different systems and takes a decentralised, user-first approach to game development and distribution. While the Solar Blockchain plays a pivotal role in tymt's ecosystem.
            </div>
          </div>
          <div className="about-solar-logo">
            <img alt="solar logo" src={solarImage} />
          </div>
        </div>

        <hr className="horizontal-stick"></hr>
        <div className="justify-center">
          <div className="about-image-layout" ref={domRef}>
            <div className="about-left-image">
              <img src={aboutLeft} className="about-images" alt="about left" />
              <div className="fc-l-Italic mb-8 text-align-center fw-b">
                Gamers!
              </div>
              <div className="fs-p text-align-center line-25">
                Users who want to play games launched from an amazing launcher with the opportunity to combine Web3 games with Web2.
              </div>
            </div>
            {isVisible ? (
              <div className="about-left-line">
                <svg className="left-svg">
                  <path
                    fill="none"
                    className="polyline"
                    d="M4.75488 147.895V224.395C4.75488 233.784 12.366 241.395 21.7549 241.395H167.53C176.919 241.395 184.53 233.784 184.53 224.395V21.895C184.53 12.5062 192.142 4.89502 201.53 4.89502H273.654"
                  />
                </svg>
              </div>
            ) : (
              <></>
            )}

            <div className="about-second-line">
              <div className="div-with-vertical-line"></div>
            </div>
            <div className="about-button-power">
              <div className="about-button-image"></div>
              <div className="about-power-image"></div>
            </div>
            {isVisible ? (
              <div className="about-right-line">
                <svg className="right-svg">
                  <path
                    fill="none"
                    className="right-polyline"
                    d="M 115 89 H 270 C 315 88 340 115 336 146 V 252 C 336 300 362 308 411 305 H 468"
                  />
                </svg>
              </div>
            ) : (
              <></>
            )}

            <div className="about-first-line">
              <div className="div-with-vertical-line"></div>
            </div>
            <div className="about-right-image">
              <img src={aboutRight} alt="about right" className="about-images" />
              <div className="fc-l-Italic mb-8 text-align-center fw-b">
                Game Developers
              </div>
              <div className="fs-p text-align-center line-25">
                If you are able to create a game, and you want to publish it – quickly and hassle-free – tymt the best distribution platform for you.
              </div>
            </div>
          </div>
        </div>

        {/* <h2 className="partners-title">partners</h2>
        <div className="partners-container margin-b-100">
          <div className="image-container justify-center">
            <img alt="solar" src={solarLogo}></img>
            <img alt="kucoin" src={kucoinLogo}></img>
            <img alt="binance" src={binanceLogo}></img>
            <img alt="solana" src={solanaLogo}></img>
            <img alt="bitget" src={bitgetLogo}></img>
            <img alt="polygon" src={polygonLogo}></img>
            <img alt="bitstamp" src={bitstampLogo}></img>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
