const HeaderCard = ({data, index}) => {
    return (
        <div className={`${data.gradient} header-card`} key={index}>
            <div className="header-card-image"><img src={data.icon} width={128} alt="icon for card"/></div>
            <div className="fs-24 white">{data.title}</div>
            <div className="fs-16 gray">{data.detail}</div>
        </div>
    )
}

export default HeaderCard;