import React from 'react';
import "../styles/styles.css";
import { useNavigate } from "react-router-dom";
import cn from 'classnames' ;

const JoinWaitlistBtn = ({classes = [], styles = {}}) =>{
    const navigate = useNavigate();
    return(
        <div onClick={() => navigate('waitlist')} className={cn(`action-button circle-button fc-l fade is-visible`, ...classes)} style={{...styles}}>
            <span className="aligned-line-height" style={{ paddingBottom: "10px" }}>Join</span>
            <span className="aligned-line-height">Waitlist</span>
        </div>
    )
}

export default JoinWaitlistBtn;