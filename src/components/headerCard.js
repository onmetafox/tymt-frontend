const HeaderCard = ({data, index}) => {
    console.log(data)
    return (
        <div className="gradient-border header-card">
            <div className="header-card-image"><img src={data.icon} width={128}/></div>
            <div className="fs-24 white">{data.title}</div>
            <div className="fs-16 gray">{data.detail}</div>
        </div>
    )
}

export default HeaderCard;