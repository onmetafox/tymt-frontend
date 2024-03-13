import logoImg from "../assets/logos/logo.svg";
import twiterIcon from "../assets/icons/twitter-icon.svg";
const Footer = () => {
    return (<div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 footer-logo content-center">
                    <img src={logoImg} width="85px" alt="logo"/>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center align-items-center">
                    <div className="m-lr-10 fs-16 white">About</div>
                    <div className="m-lr-10 fs-16 white norwap">How it Works</div>
                    <div className="m-lr-10 fs-16 white">Publishers</div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 content-center twitter-logo">
                    <img src={twiterIcon} alt="twitter"/>
                </div>
            </div>
            <div className="row m-t-20">
                <div className="col-lg-6 col-md-6 col-sm-12 fs-16 gray footer-right content-center">
                    ©2024, All right reserved.
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 d-flex content-center footer-terms">
                    <div className="fs-16 gray m-lr-10">Privacy Policy</div>
                    <div className="fs-16 gray">Terms of Service</div>
                </div>
            </div>
        </div>
    </div>)
}
export default Footer;