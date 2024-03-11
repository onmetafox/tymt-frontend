import winImg from "../assets/images/download-win.svg";
import linuxImg from "../assets/images/download-linux.svg";

const DownloadComp = () => {
    return(
        <div className={`download`}>
            <div className='download-item action-button'>
                <a href='https://github.com/tymtltd/releases/releases/download/v0.1.0/tymt-launcher_0.1.0_amd64.AppImage' target='_blank' rel="noreferrer">
                    <img src={linuxImg} alt='download linux'/>
                </a>
            </div>
            <div className='down-divider'></div>
            <div className='download-item action-button'>
                <a href='https://github.com/tymtltd/releases/releases/download/v0.1.0/tymtLauncher_0.1.0_x64_en-US.msi' target='_blank' rel="noreferrer">
                    <img src={winImg} alt='download windows'/>
                </a>
            </div>
        </div>
    )
}

export default DownloadComp;