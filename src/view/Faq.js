import React from 'react';
import "../styles/styles.css";
import "../styles/font.css";
import Accordion from '../components/Accordion';


const Faq = () => {
    return(
        <section id="faq" className='faq'>
            <div className='container'>
                <div className='faq-layout'>
                    <div className='faq-title'>
                        <div className='fc-xl2-Italic lineheight-100' style={{marginBottom: "4px"}}>faq</div>
                        <div className='fs-p line-height-1 margin-t-30'>
                            Some important questions and answers, which can create better understanding of the product for you.
                        </div>
                    </div>
                    <div className='faq-accordions-view'>
                        {/* <div className='fc-m nav-color'>tymt</div> */}
                        <Accordion/>
                    </div>
                </div>
            </div>
            <div className='contact-left-light blink'></div>
            <div className='contact-right-light blink delayed-animation'></div>
        </section>
    )
}

export default Faq;