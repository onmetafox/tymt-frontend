import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate  } from "react-router-dom";
import { TYMT_BACKEND_URL } from "../config/const";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../styles/styles.css";
import "../styles/font.css";
import logoImg from "../assets/logos/logo-transp.png";
import closeImg from "../assets/icons/x.svg";
import closeHImg from "../assets/icons/red-x.svg";

const Waitlist = () => {
  const navigate = useNavigate ();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hover, setHover] = useState(false);
  const [error, setError] = useState({
    name: "",
    email: ""
  })

  useEffect(() => {
    if (fullName === "" || email === "") setIsDisabled(true);
    else setIsDisabled(false);
  }, [fullName, email]);

  useEffect(() => {
    if (validateEmail(email) || email === "")
      setError(() => ({name: "", email: ""}))
  }, [email]);

  const close = () => {
    navigate(-1);
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  const submit = () => {
    if (!validateEmail(email)) {
      setError((state) => ({...state, email: "Email is not valid"}));
      return;
    }
    var config = {
      method: "post",
      url: `${TYMT_BACKEND_URL}/waitlist`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: {
        username: fullName,
        email: email,
      },
    };
    if (!isDisabled)
      axios(config).then(function (response) {
        if (response.data.status === 200) setIsSubmitted(true);
        else if (response.data.status === 401) {
          setIsSubmitted(false);
          setError((state) => ({...state, email: response.data.message}));
        }
        else {
          setIsSubmitted(false);
          toast.error(response.message, {
            theme: "dark"
          })
        }
      }).catch((error) => {
        toast.error(error.message, {
          theme: "dark"
        })
      });

    setError(() => ({name: "", email: ""}));
  };

  return (
    <div
      className="waitlist-modal"
    >
      <div className="modal-layout">
        <div className="modal-header">
            <div onClick={() => navigate('/')} className="modal-logo">
              <img src={logoImg} alt="log" className="modal-logo-image"/>
            </div>
            <div className="modal-close" onClick={close} style={{zIndex:'99999', cursor:"pointer"}}  onMouseEnter={()=>setHover(true)} onMouseLeave={()=>(setHover(false))}>
            {
              hover?<img src={closeHImg} alt="Hclose"/>:<img src={closeImg} alt="close"/>
            }
            </div>
        </div>
        {!isSubmitted ? (
          <div className="modal-body">
            <h2 className="margin-b-0">
              <span className="blue-color">join</span>
              <span className="main-color"> tymt</span> 
              <span> waitlist</span>
            </h2>
            <div className="modal-description fs-p-big line-height-1-2">
              Unleash the full potential of your gaming experience with tymt.<br></br> Join waitlist and receive access and special offers and news first!
            </div>
            <div className="input-layout">
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full name"
                className="modal-input"
              ></input>
              {error.email !== "" ?
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="modal-input have-error"
                ></input> :
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="modal-input"
                ></input>
              }
            {error.email !== "" && <span className="input-error-desc">{error.email}</span>}
            </div>
            <div className="modal-container">
              <div
                onClick={() => {if (isDisabled) return; submit()}}
                className={`action-button circle-button fc-m-j modal-join-button line-height-1 ${
                  isDisabled ? "modal-button-disable" : ""
                }`}
              >
                Join Waitlist
              </div>
            </div>
            <div className="modal-left-light blink"></div>
            <div className="modal-right-light blink delayed-animation"></div>
          </div>
        ) : (
          <div className="modal-body">
            <h2 className="margin-b-10 lineheight-100">
              <span> you've</span>
              <span className="success-color" style={{position: "relative",zIndex: 50}}> successfully</span>
              <br />
              <span className="success-color">joined</span>
              <span> the waitlist!</span>
            </h2>
            <div className="modal-description fs-p-big">
              Congrats! You’ve joined waitlist, we will send an updates for you
              via your email!
            </div>
            <div className="modal-finish-button action-button fc-m2-big" onClick={close}><span>Finish!</span></div>
            <div className="success-right-image blink delayed-animation"></div>
            <div className="success-left-image blink delayed-animation"></div>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};
// ReactModal.setAppElement("body");

export default Waitlist;
