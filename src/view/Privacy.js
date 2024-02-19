import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "./Header";
import comeImg from "../assets/images/comming.svg";
const Privacy = () => {
    const navigate = useNavigate();
    return <div section = "privacy" id="privacy" className="privacy-section">
        <Header />
        <div className="container">
            <div className="privacy-container">
                <img src={comeImg} alt="comming soon" />
                <div className="fc-xl1-Italic white-color">privacy policy</div>
                <div className="fs-p white-color">Soon to be announced</div>
                <div className="modal-finish-button action-button fc-m2" style={{width: "195px"}}onClick={() => navigate('/')}><span>Main Page!</span></div>
            </div>
        </div>
        <div className="modal-left-light blink"></div>
        <div className="modal-right-light blink delayed-animation"></div>
    </div>
}

export default Privacy;