import React from 'react';
import "../styles/styles.css";
import "../styles/font.css";
import faqImg from "../assets/images/faq-title.svg";
import JoinWaitListBtn from "../components/JoinWaitlistBtn";
const GetFree = () => {
    return(
        <section id="getfree" className='getfree'>
            <div className='container'>
                <div className='faq-title-img'>
                    <img src={faqImg} alt="faq-img" className='faq-img'/>
                    <JoinWaitListBtn styles={{marginLeft: "90px"}}/>
                </div>
            </div>
            <div className='contact-left-light blink'></div>
            <div className='contact-right-light blink delayed-animation'></div>
        </section>
    )
}

export default GetFree;