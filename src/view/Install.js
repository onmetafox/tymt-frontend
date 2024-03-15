import { useEffect, useState, useCallback } from "react";
import { isMobile } from 'react-device-detect';
import { useTranslation } from "react-i18next";
import { OS } from '../utils/getEnv';
import launcherImg from "../assets/images/launcher.png";
import publisherImg from "../assets/images/publisher.svg";
import developerImg from "../assets/images/developer.svg";
import DownloadComp from "../components/downloadComp";
import leftEffectImg from "../assets/images/left-red-effect.png";
import ModalComp from "../components/modalComp";
const InstallSection = () => {
    const [os] = useState(OS(window));
    const [osBtn, setOsBtn] = useState("common-btn-win");
    const [show, setShow] = useState(false);
    const { t } = useTranslation();
    const setOpen = useCallback((status)=>{
        setShow(status)
    }, [setShow]);
    useEffect(()=>{
        if(os==="Windows OS"){
            setOsBtn("common-btn-win");
        }else{
            setOsBtn("common-btn-linux");
        }
    },[os]);
    return <section  className="install-section">
        <div className="left-red-effect"><img src={leftEffectImg} alt="left effect" width={'100%'} style={{borderRadius:'16px'}}/></div>
        <div className="container d-flex flex-column" style={{gap:'30px'}}>
            <div className="launch-container" id="how-to-install">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img src={launcherImg} width={'100%'} alt="launcher" style={{borderRadius:'16px'}}/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 p-30 d-flex flex-column justify-content-around">
                        <div style={{lineHeight:'35px'}}>
                            <div className="fs-38 white">{t("your-launcher")}</div>
                            <div className="fs-38 red">{t("your-wallet")}</div>
                        </div>
                        <div className="fs-16 white">
                            {t("wallet-detail-1")}
                            <a href="https://solar.org/wallets" target="_blank" rel="noreferrer" className="blue">{t("crypto-wallet")}</a>. 
                            &nbsp;{t("wallet-detail-2")}
                        </div>
                        {!isMobile && 
                            <div>
                                <div className={`${osBtn} download-btn red-btn fs-18 bold-semi white`}>
                                    {t("install-and-play-now")}
                                    <div className="dropdown-content">
                                        <DownloadComp />
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column p-tb-50" style={{gap:'20px'}}>
                <div className="fs-48 italic white">{t("how-to-install")}</div>
                <div className="step-pan">
                    <div className="step-container short-after">
                        <div className="fs-24 white">{t("step")} 1</div>
                        <div className="fs-16 white">{t("step-1-detail")}</div>
                    </div>
                    <div className="step-container short-after">
                        <div className="fs-24 white">{t("step")} 2</div>
                        <div className="fs-16 white">{t("step-2-detail")}</div>
                    </div>
                    <div className="step-container long-after">
                        <div className="fs-24 white">{t("step")} 3</div>
                        <div className="fs-16 white">{t("step-3-detail")}</div>
                    </div>
                </div>
                <div className="step-pan">
                    <div className="step-container long-before">
                        <div className="fs-24 white">{t("step")} 4</div>
                        <div className="fs-16 white">{t("step-4-detail")}</div>
                    </div>
                    <div className="step-container short-before">
                        <div className="fs-24 white">{t("step")} 5</div>
                        <div className="fs-16 white">{t("step-5-detail")}</div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column p-tb-50" style={{gap:'40px'}} id="publisher">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="fs-48 italic white" style={{lineHeight:1}}>
                            {t("for-publishers")} <br />
                            {t("and-developers")}
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-end">
                        <div className="fs-16 white">{t("publisher-detail")}</div>
                    </div>
                </div>
                <div className="row gap-20" >
                    <div className="col-lg-6 col-sm-12">
                        <div className="publisher-container">
                            <div className="d-flex flex-column justify-content-between" style={{gap: "10px"}}>
                                <div className="fs-24 white">{t("if-you-are-a-publisher")}</div>
                                <div className="fs-16 white">{t("publisher-contact")}</div>
                                <div>   
                                    <div onClick={()=>setShow(true)} className={`${osBtn} black-btn fs-18 header-btn bold-semi white`}>{t("contact-us")}</div>
                                </div>
                            </div>
                            <div><img src={publisherImg} alt="publisher"/></div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="developer-container">
                            <div className="d-flex flex-column justify-content-between" style={{gap: "10px"}}>
                                <div className="fs-24 white">{t("if-you-are-a-developer")}</div>
                                <div className="fs-16 white">{t("developer-contact")}</div>
                                <div>
                                    <a href="https://github.com/orgs/Solar-network/repositories" target="_blank" rel="noreferrer" className={`${osBtn} black-btn fs-18 header-btn bold-semi white`}>{t("go-to-github")}</a>
                                </div>
                            </div>
                            <div><img src={developerImg} alt="developer"/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ModalComp open = {show} setOpen = {setOpen}/>
    </section>
}

export default InstallSection;