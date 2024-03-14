import { useState, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Modal } from "react-bootstrap";
import closeIcon from "../assets/icons/close-icon.svg";
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import { OS } from "../utils/getEnv";
const customStyles = {
    control: (provided) => ({
      ...provided,
      background: '#0D0D0D66',
      borderColor: 'rgba(255, 255, 255, 0.10)',
      boxShadow: 'none',
      '&:hover':{
        border:'none'
      },
      '&:focus':{
        borderColor: '#86b7fe',
        outline: 0,
        boxShadow: "0 0 0 0.25rem rgba(13, 110, 253, 0.25)"
      }
    }),
    menu: (provided) => ({
      ...provided,
      background: 'rgb(143 142 142 / 80%)',
      backdrop: 'blur(100px)',
      borderRadius: 16,
      border: 'none',
      overflow: 'hidden',
      color: 'white',
    }),
    option: (provided, state) => ({
      ...provided,
      // background: state.isSelected ? '#282828' : state.isFocused ? '#282828' : '#111',
      margin: '5px 0px 5px 0px',
      borderRadius: 8,
      background: 'rgb(143 142 142 / 29%)',
      backdrop: 'blur(100px)',
      color: 'white',
      '&:hover': {
        background: '#555',
      }
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'white',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#FFFFFF4D',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: '#999',
      '&:hover': {
        color: '#fff',
      }
    }),
    indicatorSeparator: () => ({
      // Removes the separator
      display: 'block'
    }),
    // You may also need to adjust other parts like indicatorsContainer, clearIndicator, etc.
};
const options = [
     {value:"Installation/technical issue", label:"Installation/technical issue"},
     {value:"Development question", label:"Development question"},
     {value:"Collaboration question", label:"Collaboration question"},
     {value:"Gerneral inquiry", label:"Gerneral inquiry"}
]
const ModalComp = ({ open, setOpen }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [osBtn, setOsBtn] = useState("common-btn-win");
    const [msg, setMsg] = useState("");
    const [os] = useState(OS(window));
    const { t } = useTranslation();

    const handleClose = useCallback(()=>{
        setOpen(!open);
    },  [open, setOpen]);

    const options = [
      {value:t("installation-technical-issue"), label:t("installation-technical-issue")},
      {value:t("development-question"), label:t("development-question")},
      {value:t("collaboration-question"), label:t("collaboration-question")},
      {value:t("gerneral-inquiry"), label:t("gerneral-inquiry")}
 ]
    useEffect(()=>{
        if(os==="Windows OS"){
            setOsBtn("common-btn-win");
        }else{
            setOsBtn("common-btn-linux");
        }
    },[os]);
    return (
        <Modal show={open} onHide={handleClose} backdrop="static" keyboard={false} centered>
            <div className="modal-container">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="fs-24 white">{t("contact-us")}</div>
                    <div style={{cursor:"pointer"}} onClick={()=>setOpen(!open)}><img src={closeIcon} alt="close"/></div>
                </div>
                <Form.Control value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name"/>
                <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
                    <Select
                        value={subject}
                        onChange={(e)=>setSubject(e)}
                        styles={customStyles}
                        options={options}
                        placeholder="Subject"
                        theme={(theme) => ({
                        ...theme,
                            borderRadius: 8,
                            colors: {
                                ...theme.colors,
                                primary25: '#666', // Color for options hover
                                primary: '#000', // Color for the control when it is open
                            },
                        })}
                    />
                    
                
                <Form.Control as="textarea" rows={3} value={msg} onChange={(e)=>setMsg(e.target.value)} placeholder="Your message..."/>
                <div className={`${osBtn} download-btn header-btn red-btn fs-18 bold-semi white`}>{t("submit")}</div>
            </div>
        </Modal>
    )
}

export default ModalComp;