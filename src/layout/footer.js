import logoImg from "../assets/logos/logo.svg";
import twiterIcon from "../assets/icons/twitter-icon.svg";
import { Link } from 'react-scroll';
const Footer = () => {
    return (<div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 footer-logo content-center">
                    <img src={logoImg} width="85px" alt="logo"/>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center align-items-center">
                    <Link to="home" smooth={true} duration={500} className='fs-16 white m-lr-10'>About</Link>
                    <Link to="how-to-install" smooth={true} duration={500} className='fs-16 white m-lr-10'>How it Works</Link>
                    <Link to="featured" smooth={true} duration={500} className='fs-16 white m-lr-10'>Publishers</Link>
                </div>
                <a className="col-lg-4 col-md-4 col-sm-12 content-center twitter-logo" href="https://twitter.com/SolarNetwork" target="_blank" rel="noreferrer">
                    <img src={twiterIcon} alt="twitter"/>
                </a>
            </div>
            <div className="row m-t-20">
                <div className="col-lg-6 col-md-6 col-sm-12 fs-16 gray footer-right content-center">
                    ©2024. All rights reserved.
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 d-flex content-center footer-terms">
                    <a href = "https://solar.network/terms-and-conditions" target="_blank" rel="noreferrer"  className="fs-16 gray m-lr-10">Privacy Policy</a>
                    <a href = "https://solar.network/terms-and-conditions" target="_blank" rel="noreferrer" className="fs-16 gray">Terms of Service</a>
                </div>
            </div>
        </div>
    </div>)
}
export default Footer;