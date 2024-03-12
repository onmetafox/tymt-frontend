import { useState, useEffect } from "react";
import circlePlugIcon from "../assets/icons/circle-plus-icon.svg";
import { OS } from '../utils/getEnv';
const FeaturedSection = () =>{
    const [os] = useState(OS(window));
    const [osBtn, setOsBtn] = useState("common-btn-win");
    useEffect(()=>{
        if(os==="Windows OS"){
            setOsBtn("common-btn-win");
        }else{
            setOsBtn("common-btn-linux");
        }
    },os)
    return <section id="featured" className="featured-section container">
        <div className="row">
            <div className="fs-48 bold-semi white italic">Featured Games</div>
        </div>
        <div className="row">
            <div className="col-lg-8 col-md-6 col-sm-12">
                <div className="fs-16 white  m-tb-10">Tymt GAMES is a gaming environment and platform, built using the Solar Core blockchain solutions, enabling a new world of game economy - empowering Developers and Publishers!</div>
                
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12" style={{textAlign:"right"}}>
                <div className={`${osBtn} download-btn fs-18 bold-semi white gray-btn  m-tb-10 gradient-border`} >
                        <div className="d-flex align-item-center text-center" style={{gap: '10px'}}>
                            <span>Publish your game</span>
                            <img src={circlePlugIcon}/>
                        </div>
                    </div>
                </div>
        </div>
        <div className="row">
            <div className="col-lg-8 col-md-6 col-sm-12">
                <div className="border-32 game-screen">
                    <img />
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12" style={{textAlign:"right"}}>
                <div className="d-flex flex-column"  style={{gap:'20px'}}>
                    <div className="border-32 d-flex flex-column text-start direct-53"  style={{gap:'20px'}}>
                        <div className="fs-38 white">District 53</div>
                        <div className="ts-16 white">"District 53: Voxel Metropolis" is an immersive voxel-based strategy game set in a retro-futuristic cityscape, where players vie for dominance over an ever-evolving urban jungle of neon and steel.
                            In "District 53: Voxel Metropolis", you ...</div>
                        <div className="row">
                            <div className="col-10 p-lr-10">
                                <div className={`${osBtn} download-btn fs-18 bold-semi white red-btn `} style={{display:"block"}}>
                                    Install and Play now
                                </div>
                            </div>
                            <div className="col-2 p-lr-10">
                                <div className="border-circle-icon col-2"><img src={circlePlugIcon}/></div>
                            </div>
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