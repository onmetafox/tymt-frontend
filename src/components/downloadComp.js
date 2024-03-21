import { useState, useEffect } from "react";
import winIcon from "../assets/icons/win-icon.svg";
import linuxIcon from "../assets/icons/linux-icon.svg";
import macIcon from "../assets/icons/mac-icon.svg"
import { useTranslation } from "react-i18next";

import { OS } from "../utils/getEnv";

const DownloadComp = () => {
    const [os] = useState(OS(window));
    const { t } =  useTranslation();
    const [osBtn, setOsBtn] = useState("common-btn-win");
    useEffect(()=>{
        if(os==="Windows OS"){
            setOsBtn("common-btn-win");
        }else{
            setOsBtn("common-btn-linux");
        }
    },[os]);
    return(
        <div className={`download`}>
            <div className='download-item action-button'>
                <a href='https://github.com/tymtltd/releases/releases/download/v0.1.0/tymt-launcher_0.1.0_amd64.AppImage' target='_blank' rel="noreferrer">
                    <div className="d-flex justity-content-center align-items-center">
                        <div><img src={linuxIcon} alt="linux download"/></div>
                        <div className={`${osBtn} fs-18 white`}>{t("download-for-linux")}</div>
                    </div>
                </a>
            </div>
            <div className='down-divider'></div>
            <div className='download-item action-button'>
                <a href='https://github.com/tymtltd/releases/releases/download/v0.1.0/tymtLauncher_0.1.0_x64_en-US.msi' target='_blank' rel="noreferrer">
                    <div className="d-flex justity-content-center align-items-center">
                        <div><img src={winIcon} alt="win download"/></div>
                        <div className={`${osBtn} fs-18 white`}>{t("download-for-windows")}</div>
                    </div>
                </a>
            </div>
            <div className='down-divider'></div>
            <div className='download-item action-button'>
                <a href='https://github.com/tymtltd/releases/releases/download/v0.2.0/tymtLauncher_0.2.0_x64.dmg' target='_blank' rel="noreferrer">
                    <div className="d-flex justity-content-center align-items-center">
                        <div><img src={macIcon} alt="mac download"/></div>
                        <div className={`${osBtn} fs-18 white`}>{t("download-for-mac")}</div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default DownloadComp;