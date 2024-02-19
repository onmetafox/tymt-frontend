import React, { useState, useRef, useEffect } from "react";
import "../styles/styles.css";
import "../styles/font.css";

const Roadmap = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [number, setNumber] = useState(0);
  const numberRef = useRef(0);
  const hocerRef = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = (event) => {
      if (hocerRef.current) {
        const delta = event.deltaY;
        if (delta > 0) {
          if (
            numberRef.current < 2300 - windowWidth + 200 &&
            numberRef.current >= 0
          ) {
            if (
              numberRef.current + parseInt(delta / 3) <=
              2300 - windowWidth + 200
            )
              numberRef.current += parseInt(delta / 3);
            else numberRef.current = 2300 - windowWidth + 200;
            setNumber(numberRef.current);
            event.preventDefault();
          }
        } else if (delta < 0) {
          if (
            numberRef.current <= 2300 - windowWidth + 200 &&
            numberRef.current > 0
          ) {
            if (numberRef.current + parseInt(delta / 3) >= 0)
              numberRef.current += parseInt(delta / 3);
            else numberRef.current = 0;
            setNumber(numberRef.current);
            event.preventDefault();
          }
        }
      }
    };
    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [windowWidth]);

  const handleSliderChange = (event) => {
    setNumber(event.target.value);
  };

  return (
    <section id="roadmap" className="roadmap">
      <div className="roadmap-title">
        <div className="roadmap-title-description fc-s">
          We are moving forward, check it out here!
        </div>
      </div>
      <div
        className="over-flow"
        onMouseEnter={() => (hocerRef.current = true)}
        onMouseLeave={() => (hocerRef.current = false)}
      >
        <div
          className="roadmap-layout"
          style={{ marginLeft: `${0 - number}px` }}
        >
          <div className="roadmap-layout1">
            <div className="roadmap-card">
              <div className="roadmap-card-milestone fc-l">Q4 2021</div>
              <div className="roadmap-card-title fc-l2">
                Game Launcher's Alpha Release
              </div>
              <div className="roadmap-card-content fc-m">
                Tymt's official alpha release to collect bug report internally
                and fix existing issues
              </div>
            </div>
            <div className="roadmap-card">
              <div className="roadmap-card-milestone fc-l">Q2 2022</div>
              <div className="roadmap-card-title fc-l2">
                Web3 Alpha Integration
              </div>
              <div className="roadmap-card-content fc-m">
                Feature of connecting Web3 wallets to the launcher with further
                goal to integrate games operating on different blockchains
              </div>
            </div>
            <div className="roadmap-card">
              <div className="roadmap-card-milestone fc-l future-milestone-color">
                Q1 2024
              </div>
              <div className="roadmap-card-title fc-l2">
                Solana, Bitcoin and Dogecoin Support
              </div>
              <div className="roadmap-card-content fc-m">
                Solana, Bitcoin and Dogecoin-based games integration.New
                features and MVP Design Process.
              </div>
            </div>
            <div className="roadmap-card">
              <div className="roadmap-card-milestone fc-l future-milestone-color">
                Q3 2024
              </div>
              <div className="roadmap-card-title fc-l2">
                Twitch integration and Learn to Earn Platform
              </div>
              <div className="roadmap-card-content fc-m">
                Unlock the full potential of Twitch integration and a
                cutting-edge Learn to Earn Platform, revolutionizing the
                streaming and educational experience.
              </div>
            </div>
          </div>
          <div className="roadmap-bar">
            <div className="roadmap-point"></div>
            <div className="roadmap-point second-point"></div>
            <div className="roadmap-point third-point"></div>
            <div className="roadmap-point fourth-point"></div>
            <div className="roadmap-point fifth-point"></div>
            <div className="roadmap-point sixth-point"></div>
            <div className="roadmap-point seventh-point"></div>
          </div>
          <div className="roadmap-layout2">
            <div className="roadmap-card roadmap-second-milestone">
              <div className="roadmap-card-milestone fc-l">Q1 2022</div>
              <div className="roadmap-card-title fc-l2">
                Game Launcher's Beta Release
              </div>
              <div className="roadmap-card-content fc-m">
                Tymt's Beta release. Testing is completed by real users
              </div>
            </div>
            <div className="roadmap-card roadmap-fourth-milestone">
              <div className="roadmap-card-milestone fc-l main-color ">
                Q3 2023
              </div>
              <div className="roadmap-card-title fc-l2">
                New Blockchains Support
              </div>
              <div className="roadmap-card-content fc-m">
                Integration of Ethereum, Binance Smart Chain and Polygon based
                games, rebranding and new features designing.
              </div>
            </div>
            <div className="roadmap-card roadmap-sixth-milestone">
              <div className="roadmap-card-milestone fc-l future-milestone-color">
                Q2 2024
              </div>
              <div className="roadmap-card-title fc-l2">
                Tymt's SDK release for comfortable development of web3 games
                inhouse with comfortable guidance
              </div>
              <div className="roadmap-card-content fc-m">
                Tymt's groundbreaking SDK empowers developers to effortlessly
                create immersive web3 games in-house, supported by user-friendly
                guidance.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="roadmap-sliderbar">
        <input
          type="range"
          min={-50}
          max={2300 - windowWidth + 200}
          value={number}
          onChange={handleSliderChange}
          className="range-input"
        />
        <div className="fc-xs slider-bar-description">SCROLL TO SEE MORE</div>
      </div>
    </section>
  );
};

export default Roadmap;
