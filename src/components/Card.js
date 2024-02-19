import React from 'react';
import "../styles/styles.css";

const Card = (props) =>{

    return(
        <div 
            className={`card fade-item`}
        >
            <div className="justify-center">
                <img alt="props.title" className="card-image" src={props.src}></img>
            </div>
            <div className="fc-l-Italic mb-8 text-align-center">{props.title}</div>
            <div className="fs-p text-align-center">{props.text}</div>
        </div>
    )
}

export default Card;