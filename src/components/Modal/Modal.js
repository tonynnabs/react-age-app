import { useState } from "react/cjs/react.development";
import "./Modal.css";

const Modal = (props) => {
    const closeModalHandler = () => {
        props.onClose();
    }
  return (
    <div className="modal__container" onClick={closeModalHandler}>
      <div className="modal__card">
        <div className="card__header">{props.modal.title}</div>
        <div className="card__content">
          <p> {props.modal.msg} </p>
          <div className="card__button">
            <button onClick={closeModalHandler}>Okay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
