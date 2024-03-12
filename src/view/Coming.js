import logoImg from "../assets/logos/game-logo.svg";
const Coming = () => {
    return <section id="coming-soon" className="coming-soon container">
        <div className=" coming-soon-container  d-flex flex-column text-center justify-content-center align-items-center">
            <div><img src={logoImg}/></div>
            <div className="fs-48 white-oppacity italic bold">More Games on the way!</div>
        </div>
    </section>
}
export default Coming;