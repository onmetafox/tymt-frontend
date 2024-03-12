import React, {useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { OS } from '../utils/getEnv';
import { isMobile } from 'react-device-detect';
import DownloadComp from '../components/downloadComp';
import benefits from '../config/benefits';
import HeaderCard from '../components/headerCard';

function getCarousel () {
    const { innerWidth: width, innerHeight: height } = window;
    if(width <= 1200 && height){
        return true;
    }else{
        return false;
    }
    
}
const HomeSection = () => {
    const [os] = useState(OS(window));
    const [osBtn, setOsBtn] = useState("common-btn-win");
    const [carousel, setCarousel] = useState(getCarousel());

    useEffect(()=>{
        if(os==="Windows OS"){
            setOsBtn("common-btn-win");
        }else{
            setOsBtn("common-btn-linux");
        }
    },os);
    useEffect(() => {
        function handleResize() {
            setCarousel(getCarousel());
            console.log(carousel)
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return(
        <section id="home" className="home home-section">
            <div></div>
            <div className='container flex-colum'>
                <div className='row detail-container'>
                    <div className='col-12'>
                        <div className='description'>
                            <div className='fs-96 bold italic white nowrap'>Welcome to</div> 
                            <span className='fs-96 bold italic blue nowrap'>the future</span>
                            <span className='fs-96 bold italic white nowrap'> of</span>
                            <div className='fs-96 bold italic white nowrap'>gaming!</div> 
                        </div>
                        <div className='fs-20 white m-tb-20' style={{maxWidth: '550px'}}>
                            Tymt is a multi-chain game launcher and an environment fo creating and publishing games
                        </div>
                        {!isMobile && 
                            <div className={`${osBtn} download-btn red-btn fs-18 bold-semi white`}>
                                Install and Play now
                                {/* <div className="dropdown-content">
                                    <DownloadComp />
                                </div> */}
                            </div>
                        }
                    </div>
                </div>
                <div className='row card-container'>
                    {!carousel && benefits.map((item, index)=> (
                        <div className='col-3'>
                            <HeaderCard data={item} index = {index}/>
                        </div>
                    ))}
                    
                </div>
            </div>
            {carousel && (
                <Swiper slidesPerView={2} spaceBetween={30} centeredSlides={true} pagination={{ clickable: true, }} loop={true}>
                    {
                        benefits.map((item, index)=> (
                            <SwiperSlide>
                                <HeaderCard data={item} index = {index}/>
                            </SwiperSlide>
                        ))
                    }
            </Swiper>)}
        </section>
    )
}

export default HomeSection;