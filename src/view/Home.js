import React, {useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import 'swiper/css';

import { OS } from '../utils/getEnv';
import { isMobile } from 'react-device-detect';
import DownloadComp from '../components/downloadComp';
import {benefitsEn, benefitsJp} from '../config/benefits';
import { replaceStr } from '../utils/helper';
import HeaderCard from '../components/headerCard';
import redImg from "../assets/images/red-effect.png";
import { getLang } from '../utils/languageSlice';
function getCarousel () {
    const { innerWidth: width, innerHeight: height } = window;
    if( 768 < width && width <= 1200 && height){
        return {carousel:true, preview:2};
    }else if( width < 768 && height){
        return {carousel:true, preview:1};
    }else{
        return {carousel:false, preview:0};
    }
    
}
const HomeSection = () => {
    const [os] = useState(OS(window));
    const [osBtn, setOsBtn] = useState("common-btn-win");
    const [carousel, setCarousel] = useState(false);
    const [data, setData] = useState(benefitsEn);
    const [preview, setPreview] = useState();
    const {t} = useTranslation();
    const lang = useSelector(getLang);
    useEffect(()=>{
        
        if(lang==="en"){
            setData(benefitsEn);
        }else{
            setData(benefitsJp);
        }
        if(os==="Windows OS"){
            setOsBtn("common-btn-win");
        }else{
            setOsBtn("common-btn-linux");
        }
    },[os, lang]);
    useEffect(() => {
        const {carousel, preview} = getCarousel();
        setCarousel(carousel);
        setPreview(preview);
        function handleResize() {
            const {carousel, preview} = getCarousel();
            setCarousel(carousel);
            setPreview(preview);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return(
        <section id="home" className="home home-section">
            <div className='red-effect'><img src={redImg} alt='red effect'/></div>
            <div className='mac-img'></div>
            <div className='container flex-colum' style={{position:'relative', zIndex:10}}>
                <div className='row detail-container'>
                    <div className='col-12'>
                        <div className='description'>
                            <div className='fs-96 bold italic white nowrap'>{t("welcome-to")}</div> 
                            <span className='fs-96 bold italic blue nowrap'>{t("the-future")}</span>
                            <span className='fs-96 bold italic white nowrap'> {t("of")}</span>
                            <div className='fs-96 bold italic white nowrap'>{t("gaming")}!</div> 
                        </div>
                        <div className='fs-20 white m-tb-20' style={{maxWidth: '550px'}}>
                            {replaceStr(t("home-detail"))}
                        </div>
                        {!isMobile && 
                            <div className={`${osBtn} download-btn red-btn fs-18 bold-semi white`}>
                                {t("install-and-play-now")}
                                <div className="dropdown-content">
                                    <DownloadComp />
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className='row card-container'>
                    {!carousel && data.map((item, index)=> (
                        <div className='col-3' key={index}>
                            <HeaderCard data={item} index = {index}/>
                        </div>
                    ))}
                    
                </div>
            </div>
            {carousel && (
                <Swiper slidesPerView={preview} spaceBetween={30} centeredSlides={true} pagination={{ clickable: true, }} loop={true}>
                    {
                        data.map((item, index)=> (
                            <SwiperSlide key={index}>
                                <HeaderCard data={item} index = {index}/>
                            </SwiperSlide>
                        ))
                    }
            </Swiper>)}
        </section>
    )
}

export default HomeSection;