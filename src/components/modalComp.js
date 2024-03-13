import { useState, useCallback } from "react";
import { Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
const ModalComp = ({ open, setOpen }) => {

    const handleClose = useCallback(()=>{
        setOpen(!open);
    },  [open, setOpen]);
    
    return (<Modal
        show={open}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Do not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>)
}

export default ModalComp;