import React, { useState, useEffect, useRef }  from 'react';
import "../styles/styles.css";
import Card from '../components/Card';
import { benefitData } from '../config/const';

const Benefit = () =>{
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();
    
    useEffect(() => {
        const domRefValue = domRef.current;
        let observerRefValue = null;
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRefValue);
        observerRefValue = domRefValue
        return () =>{
            if(observerRefValue)
                observer.unobserve(observerRefValue);
        }
    }, []);
    
    return(
        <section id="benefit" className="benefit">
            <div ref={domRef}  className={`icons-view ${isVisible ? 'fade-left fade-opacity' : ''}`}>
                {
                    benefitData.map((item, key) =>
                        <Card 
                            key={key} 
                            src={item.src} 
                            title={item.title} 
                            text={item.text}
                        />
                    ) 
                }
            </div>
        </section >
    )
}

export default Benefit;