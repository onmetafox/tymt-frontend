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

const ContactForm = () => {
  const navigate = useNavigate ();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [height, setHeight] = useState('auto');
  const [hover, setHover] = useState(false);
  const [error, setError] = useState({
    name: "",
    email: ""
  })

  const autoExpand = (e) => {
    setHeight('auto'); // Reset the height to auto
    setHeight(`${e.target.scrollHeight}px`); // Set the height to match the scroll height
    console.log(e.target.scrollHeight)
  };

  useEffect(() => {
    if (fullName === "" || email === "" || msg === "") setIsDisabled(true);
    else setIsDisabled(false);
  }, [fullName, email, msg]);

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
      url: `${TYMT_BACKEND_URL}/contactus`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: {
        username: fullName,
        email: email,
        message: msg,
      },
    };
    if (false && !isDisabled) {
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
    }
    setIsSubmitted(true);
    setError(() => ({name: "", email: ""}));
  };

  return (
    <div
      className="waitlist-modal"
    >
      <div className="modal-layout">
        <div className="modal-header">
          <div onClick={() => navigate('/')} className="modal-logo">
            <img src={logoImg} alt="logo"/>
          </div>
          <div className="modal-close" onClick={close} style={{zIndex:'99999', cursor:"pointer"}} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>(setHover(false))}>
            {
              hover?<img src={closeHImg} alt="Hclose"/>:<img src={closeImg} alt="close"/>
            }
            
          </div>
        </div>
        {!isSubmitted ? (
          <div className="modal-body">
            <h2 className="margin-b-0">
              <span>contact </span>
              {/* <span className="main-color"> tymt</span> */}
              <span className="main-color">form</span>
            </h2>
            <div className="modal-description line-height-1 fc-l">
              Reach tymt to discuss everything what you need related to the company and our products!
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
              <textarea
                value={msg}
                style={{ height }}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="Your message"
                className="modal-input modal-textarea"
                onInput={autoExpand}
                rows={1}
              ></textarea>
            </div>
            <div className="modal-container">
              <div
                onClick={() => {if (isDisabled) return; submit()}}
                className={`action-button circle-button fc-m-j modal-join-button ${
                  isDisabled ? "modal-button-disable" : ""
                }`}
              >
                <span className="aligned-line-height" style={{ paddingBottom: "10px" }}>Send</span>
                <span className="aligned-line-height">Form</span>
              </div>
            </div>
            <div className="modal-left-light blink"></div>
            <div className="modal-right-light blink delayed-animation"></div>
          </div>
        ) : (
          <div className="modal-body">
            <h2 className="margin-b-10 lineheight-100">
              <span> we will</span>
              <span className="success-color"> contact you</span>
              <br />
              <span> as soon as possible</span>
            </h2>
            <div className="modal-description fs-p">
              Congrats! You’ve joined waitlist, we will send an updates for you
              via your email!
            </div>
            <div className="modal-finish-button action-button fc-m2" onClick={close}><span>Finish!</span></div>
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

export default ContactForm;
