import { Fragment, useState } from "react/cjs/react.development";
import "./Modal.css";
import ReactDOM from "react-dom";

const ModalRoot = (props) => {
  return (
    <div className="modal__container" onClick={props.onClose}>
      <div className="modal__card">
        <div className="card__header">{props.title}</div>
        <div className="card__content">
          <p>{props.message} </p>
          <div className="card__button">
            <button onClick={props.onClose}>Okay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalRoot
          onClose={props.onClose}
          title={props.modal.title}
          message={props.modal.msg}
        />,
        document.getElementById("modal-root")
      )}
    </Fragment>
  );
};

export default Modal;
