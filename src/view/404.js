import React from 'react';
import { useNavigate  } from "react-router-dom";
import "../styles/styles.css";
import "../styles/font.css";

const Error = () => {
    const navigate = useNavigate ();
    return(
        <div className='body'>
            <div className='error-layout'>
                <div className='error-title'></div>
                <div className='error-heading fc-l2-Italic'> Page not found</div>
                <div className='error-description fc-m'>Page doesn’t exist, please check the  page URL or go back to the homepage.</div>
                <div className='error-button fc-m2' onClick={() => navigate(-1)}>Main Page</div>
            </div>
            <div className='modal-left-light'></div>
            <div className='modal-right-light'></div>
        </div>
    )
}

export default Error;