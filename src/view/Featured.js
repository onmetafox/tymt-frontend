import { useState, useEffect } from "react";
import circlePlugIcon from "../assets/icons/circle-plus-icon.svg";
import DownloadComp from "../components/downloadComp";
import { useTranslation } from "react-i18next";
import { OS } from '../utils/getEnv';
const FeaturedSection = () =>{
    const [os] = useState(OS(window));
    const [osBtn, setOsBtn] = useState("common-btn-win");
    const { t } = useTranslation();
    useEffect(()=>{
        if(os==="Windows OS"){
            setOsBtn("common-btn-win");
        }else{
            setOsBtn("common-btn-linux");
        }
    },[os])
    return <section id="featured" className="featured-section container">
        <div className="row">
            <div className="fs-48 bold-semi white italic">{t("featured-games")}</div>
        </div>
        <div className="row">
            <div className="col-lg-8 col-md-6 col-sm-12">
                <div className="fs-16 white  m-tb-10">{t("featured-detail")}</div>
                
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12" style={{textAlign:"right"}}>
                <div className={`${osBtn} download-btn fs-18 bold-semi white gray-btn  m-tb-10 gradient-border`} >
                        <div className="d-flex align-item-center text-center" style={{gap: '10px'}}>
                            <span>{t("publish-your-game")}</span>
                            <img src={circlePlugIcon} alt ="circle plus"/>
                        </div>
                    </div>
                </div>
        </div>
        <div className="row">
            <div className="col-lg-8 col-md-6 col-sm-12">
                <div className="border-32 game-screen"></div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12" style={{textAlign:"right"}}>
                <div className="d-flex flex-column"  style={{gap:'20px'}}>
                    <div className="border-32 d-flex flex-column text-start direct-53"  style={{gap:'20px'}}>
                        <div className="fs-38 white">District 53</div>
                        <div className="ts-16 white">{t("district-detail")}</div>
                        <div className="d-flex justify-content-between" style={{gap:'20px'}}>
                            <div className={`${osBtn} download-btn fs-18 bold-semi white red-btn `} style={{display:"block", width:"100%"}}>
                                {t("install-and-play-now")}
                                <div className="dropdown-content">
                                    <DownloadComp />
                                </div>
                            </div>
                            <div className="border-circle-icon col-2"><img src={circlePlugIcon} alt = "circle plus"/></div>
                        </div>
                    </div>
                    <div className="d-flex">

                    </div>
                </div>
            </div>
        </div>
    </section>
}
export default FeaturedSection;