import logoImg from "../assets/logos/game-logo.svg";
import { useTranslation } from "react-i18next";
const Coming = () => {
    const { t } = useTranslation();
    return <section id="coming-soon" className="coming-soon container">
        <div className=" coming-soon-container  d-flex flex-column text-center justify-content-center align-items-center">
            <div><img src={logoImg} alt="logo"/></div>
            <div className="fs-48 white-oppacity italic bold">{t("more-games")}!</div>
        </div>
    </section>
}
export default Coming;