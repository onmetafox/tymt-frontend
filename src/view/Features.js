import React from 'react';
import "../styles/styles.css";
import "../styles/space.css"
import { featuresData } from '../config/const';
import FeaturesCard from '../components/FeatureCard';
import JoinWaitListBtn from "../components/JoinWaitlistBtn";

const Features = () =>{
    return(
        <section  id="features" className="features">
            <div className='container'>
                <div className='features-title-layout'>
                    <div style={{display:'flex', justifyContent:'center', flexDirection: 'column'}}>
                        <div className='feature-head'>
                            <div className='lineheight-100 feature-name' styles={{margin: "20px 0"}}>discover tymt's</div>
                            <div className='feature-button-layout'><JoinWaitListBtn/></div>
                        </div>
                        <div className='features-title'>
                            <div>
                                <span className='red-powerful'>powerful</span><br></br>
                                <span className='blue-features'>features</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='features-card-layout'>
                    {featuresData.map((item, key)=><FeaturesCard background={item.background} key={key} src={item.src} title={item.title} text={item.text} isRight={ key % 2 === 1 }/>)}
                </div>
            </div>
            <div className="features-left-light blink"></div>
            <div className="features-right-light blink delayed-animation"></div>
        </section>
    )
}

export default Features;