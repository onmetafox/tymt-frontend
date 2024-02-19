import React from 'react';
import "../styles/styles.css";
import win from "./../assets/images/download-win.svg";
import linux from "./../assets/images/download-linux.svg"
const DownCmp = (props) =>{

    return(
        <div className={`download`}>
            <div className='download-item action-button'>
                <a href='https://github.com/tymtltd/releases/releases/download/v0.1.0/tymt-launcher_0.1.0_amd64.AppImage' target='_blank' rel="noreferrer">
                    <img src={linux} alt='download linux'/>
                </a>
            </div>
            <div className='down-divider'></div>
            <div className='download-item action-button'>
                <a href='https://github.com/tymtltd/releases/releases/download/v0.1.0/tymtLauncher_0.1.0_x64_en-US.msi' target='_blank' rel="noreferrer">
                    <img src={win} alt='download windows'/>
                </a>
            </div>
        </div>
    )
}

export default DownCmp; 