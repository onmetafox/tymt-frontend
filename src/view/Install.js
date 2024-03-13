import { useEffect, useState } from "react";
import { isMobile } from 'react-device-detect';

import { OS } from '../utils/getEnv';
import launcherImg from "../assets/images/launcher.png";
import publisherImg from "../assets/images/publisher.svg";
import developerImg from "../assets/images/developer.svg";
import DownloadComp from "../components/downloadComp";
import leftEffectImg from "../assets/images/left-red-effect.png";

const InstallSection = () => {
    const [os] = useState(OS(window));
    const [osBtn, setOsBtn] = useState("common-btn-win");

    useEffect(()=>{
        if(os==="Windows OS"){
            setOsBtn("common-btn-win");
        }else{
            setOsBtn("common-btn-linux");
        }
    },[os]);
    return <section id="how-to-install" className="install-section">
        <div className="left-red-effect"><img src={leftEffectImg} alt="left effect"/></div>
        <div className="container d-flex flex-column" style={{gap:'30px'}}>
            <div className="launch-container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img src={launcherImg} width={'100%'} alt="launcher"/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 p-30 d-flex flex-column justify-content-around">
                        <div style={{lineHeight:'35px'}}>
                            <div className="fs-38 white">Your Launcher</div>
                            <div className="fs-38 red">Your Wallet</div>
                        </div>
                        <div className="fs-16 white">In order to enjoy all the benefits of Web3 gaming - you need a “blockchain id” - an “address” - just like you do when you install a 
                            &nbsp; <a href="https://github.com" className="blue">crypto wallet</a>.
                            When you Sign-in to tymt - it will automatically create 5 such “addresses”: on Solar (SXP), ERC-20 (ETH), BSC (BNB), Solana (SOL), Polygon (MATIC), and Bitcoin chains.
                            You can easily access and manage them from your Wallet in order to Pay with any currency - and Play on any chain.
                        </div>
                        {!isMobile && 
                            <div>
                                <div className={`${osBtn} download-btn red-btn fs-18 bold-semi white`}>
                                    Install and Play now
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
                <div className="fs-48 italic white">How to install and play</div>
                <div className="row justify-content-between gap-20">
                    <div className="col-lg-2">
                        <div className="step-container short-after">
                            <div className="fs-24 white">STEP 1</div>
                            <div className="fs-16 white-oppacity">Download and install the tymt launcher.</div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="step-container short-after">
                            <div className="fs-24 white">STEP 2</div>
                            <div className="fs-16 white-oppacity">Create your account. If you have a Solar Wallet, or a Solar Card App - you can import your account as well!</div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="step-container long-after">
                            <div className="fs-24 white">STEP 3</div>
                            <div className="fs-16 white-oppacity">Make sure to secure and store your pass-phrase. Remember that in Web3 - your phrase is the ultimate key to restore your wallet.</div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-between gap-20">
                    <div className="col-lg-7">
                        <div className="step-container long-before">
                            <div className="fs-24 white">STEP 4</div>
                            <div className="fs-16 white-oppacity">Visit the Catalog for a list of available games. Currently tymt features District 53 - a voxel-based metaverse developed by tymt GAMES / Dokdo.</div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="step-container short-before">
                            <div className="fs-24 white">STEP 5</div>
                            <div className="fs-16 white-oppacity">Join our social channels for community support, help and to meet new friends!</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column p-tb-50" style={{gap:'40px'}}>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="fs-48 italic white" style={{lineHeight:1}}>
                            For publishers <br />
                            and developers
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-end">
                        <div className="fs-16 white">Our mission is to bridge, connect and empower Gamers, Developers and Game Publishers - we think in terms of Community, rather than Competition.
    If you want to reach a new community of potential gamers - publish your game on tymt!</div>
                    </div>
                </div>
                <div className="row gap-20">
                    <div className="col-lg-6 col-sm-12">
                        <div className="publisher-container">
                            <div className="d-flex flex-column justify-content-between">
                                <div className="fs-24 white">If youa re a Publisher</div>
                                <div className="fs-16 white-oppacity">Simply contact us and publsih your game</div>
                                <div>
                                    <div className={`${osBtn} black-btn fs-18 header-btn bold-semi white`}>Contact Us</div>
                                </div>
                            </div>
                            <div><img src={publisherImg} alt="publisher"/></div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="developer-container">
                            <div className="d-flex flex-column justify-content-between">
                                <div className="fs-24 white">If youa re a Publisher</div>
                                <div className="fs-16 white-oppacity">Simply contact us and publsih your game</div>
                                <div>
                                    <div className={`${osBtn} black-btn fs-18 header-btn bold-semi white`}>Go to GitHub</div>
                                </div>
                            </div>
                            <div><img src={developerImg} alt="developer"/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
}

export default InstallSection;