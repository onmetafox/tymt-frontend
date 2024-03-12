const HeaderCard = ({data, index}) => {
    console.log(data)
    return (
        <div className="header-card">
            <div><img src={data.icon}/></div>
            <div className="fs-24 white">{data.title}</div>
            <div className="fs-16 gray">{data.detail}</div>
        </div>
    )
}

export default HeaderCard;