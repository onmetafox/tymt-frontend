import React from 'react';
import "../styles/styles.css";

const FeaturesCard = (props) =>{
    const [isVisible, setVisible] = React.useState(true);
    const domRef = React.useRef();
    
    React.useEffect(() => {
        const domRefValue = domRef.current;
        let observerRefValue = null;
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRefValue);
        observerRefValue = domRefValue;
        return () => {
            if (observerRefValue) observer.unobserve(observerRefValue);
        }
    }, []);

    return(
        <div className={`features-card-view fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
            {
                props.isRight?
                <div className="features-card revert" style={{backgroundImage:`url(${props.background})`}}>
                    {/* <img alt="background" src={props.background} className='features-card-background'></img> */}
                    <div className="feature-row">
                        <img alt="props.title" className="features-card-image f-m-l-100" src={props.src}></img>
                    </div>
                    <div className='features-card-text'>
                        <div className="fc-xl1-Italic fw-b">{props.title}</div>
                        <div className="fs-p line-height-1-2">{props.text}</div>
                    </div>
                </div>:
               <div className="features-card" style={{backgroundImage:`url(${props.background})`}}>
                    {/* <img alt="background" src={props.background} className='features-card-background'></img> */}
                    <div className='features-card-text'>
                        <div className="fc-xl1-Italic fw-b">{props.title}</div>
                        <div className="fs-p line-height-1-2">{props.text}</div>
                    </div>
                    <div className="feature-row">
                        <img alt="props.title" className="features-card-image" src={props.src}></img>
                    </div>
                </div>
            }
        </div>
    )
}

export default FeaturesCard;