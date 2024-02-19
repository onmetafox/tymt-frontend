import React, {useRef, useEffect} from 'react';
import "../styles/styles.css";
import "../styles/font.css";
import headImg from "../assets/images/home-text.svg";
import JoinWaitListBtn from "../components/JoinWaitlistBtn";
// import { useDispatch } from 'react-redux'
// import { toggle } from '../utils/modalshowSlice';

const Home = () => {
    const [isVisible, setVisible] = React.useState(false);
    const homeRef = useRef();
    // const dispatch = useDispatch()

    useEffect(()=>{
        const domRefValue = homeRef.current;
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
          });
        observer.observe(domRefValue);
        return () => observer.unobserve(domRefValue);
    },[])

    return(
        <section id="home" ref={homeRef}>
            <div className='home-section'>
                <div className='home-logo'>
                    <div className={`home-text-image fade ${isVisible ? 'is-visible' : ''}`}>
                        <img src={headImg} alt='header'/>
                    </div>
                    <div style={{display:'flex', flexDirection:'column', justifyContent:'end'}}>
                        <div className="home-text" style={{height:'100%', marginBottom:40}}>
                            Are you ready to embark on a gaming journey like no other? Meet tymt, the brainchild of the visionary minds at Dokdo, the creators of District 53 Metaverse. tymt is poised to empower the Web3 gaming industry worldwide.
                        </div>
                        { isVisible && <JoinWaitListBtn styles={{ margin: "auto" }}/> }
                    </div>
                        {/* <div onClick={() => navigate('waitlist')}  className='circle-button get-free-button fc-l'>Join Waitlist</div> */}
                </div>
            </div>
            <div className="home-left-light blink"></div>
            <div className="home-right-light blink delayed-animation"></div>
        </section>
    )
}

export default Home;