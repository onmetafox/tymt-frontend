import React, { useState } from "react";
import "../styles/styles.css";
import "../styles/font.css";
import { howtoworkData, howtoworkDevData } from '../config/const';

const HowitWorks = () => {
  const [activeOption, setActiveOption] = useState("gamer");
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();

  React.useEffect(() => {
    const domRefValue = domRef.current;
    let observerRefValue = null;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRefValue);
    observerRefValue = domRefValue;
    return () => {
      if (observerRefValue) observer.unobserve(domRefValue);
    };
  }, []);


  return (
    <section
      id="howitworks"
      className={`${
        activeOption === "gamer" ? "howitworks" : "howitworks-activate"
      }`}
      ref={domRef}
    > <div className="container">
        <div className="howitworks-layout">
          <h1 className="howitworks-title">
            how tymt <br /> works
          </h1>
          <div className="button-group">
            <div
              onClick={(e) => {
                setActiveOption("gamer");
                setVisible(false);
                setTimeout(() => {
                  setVisible(true);
                }, 500);
              }}
              className={`action-button gamer-button fc-l line-height-1 ${
                activeOption === "gamer" ? "gamer-button-activate" : ""
              }`}
            >
              I am a gamer
            </div>
            <div
              onClick={(e) => {
                setActiveOption("dev");
                setVisible(false);
                setTimeout(() => {
                  setVisible(true);
                }, 500);
              }}
              className={`action-button dev-button fc-l line-height-1  ${
                activeOption === "dev" ? "dev-button-activate" : ""
              }`}
            >
              I am a developer
            </div>
          </div>
        </div>
        <div
          className={`howitworks-main-layout ${isVisible ? "is-visible" : ""}`}
        >
          <div className="first-step-layout">
            <div
              className={`${
                activeOption === "gamer" ? "first-step" : "first-step-activate"
              }`}
            >
              {activeOption === "gamer" ? <div className="howtowork-tile">
                <div className="howtowork-tile-title"> {howtoworkData[0].title}</div>
                <div className="howtowork-tile-text"> {howtoworkData[0].text}</div>
              </div> : <div className="howtowork-tile">
                <div className="howtowork-tile-title"> {howtoworkDevData[0].title}</div>
                <div className="howtowork-tile-text"> {howtoworkDevData[0].text}</div>
              </div>}
            </div>
          </div>
          <div className="first-line-layout justify-center fade-in-section">
            <div className="first-line"></div>
          </div>
          <div className="second-step-layout">
            <div
              className={`${
                activeOption === "gamer" ? "second-step" : "second-step-activate"
              }`}
            >
              {activeOption === "gamer" ? <div className="howtowork-tile">
                <div className="howtowork-tile-title"> {howtoworkData[1].title}</div>
                <div className="howtowork-tile-text"> {howtoworkData[1].text}</div>
              </div> : <div className="howtowork-tile">
                <div className="howtowork-tile-title"> {howtoworkDevData[1].title}</div>
                <div className="howtowork-tile-text"> {howtoworkDevData[1].text}</div>
              </div>}
            </div>
          </div>
          <div className="second-line-layout justify-center">
            <div className="second-line"></div>
          </div>
          <div className="third-step-layout">
            <div
              className={`${
                activeOption === "gamer" ? "third-step" : "third-step-activate"
              }`}
            >
              {activeOption === "gamer" ? <div className="howtowork-tile">
                <div className="howtowork-tile-title"> {howtoworkData[2].title}</div>
                <div className="howtowork-tile-text"> {howtoworkData[2].text}</div>
              </div> : <div className="howtowork-tile">
                <div className="howtowork-tile-title"> {howtoworkDevData[2].title}</div>
                <div className="howtowork-tile-text"> {howtoworkDevData[2].text}</div>
              </div>}
            </div>
          </div>
          <div className="third-line-layout justify-center">
            <div className="third-line"></div>
          </div>
          <div className="fourth-step-layout">
            <div
              className={`${
                activeOption === "gamer" ? "fourth-step" : "fourth-step-activate"
              }`}
            >
              {activeOption === "gamer" ? <div className="howtowork-tile">
                <div className="howtowork-tile-title"> {howtoworkData[3].title}</div>
                <div className="howtowork-tile-text"> {howtoworkData[3].text}</div>
              </div> : <div className="howtowork-tile">
                <div className="howtowork-tile-title"> {howtoworkDevData[3].title}</div>
                <div className="howtowork-tile-text"> {howtoworkDevData[3].text}</div>
              </div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowitWorks;
