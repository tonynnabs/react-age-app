import React, { useRef, useState } from "react";
import Modal from "../Modal/Modal";
import Button from "../UI/Button";
import "./NewUser.css";

const NewUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [modal, setModal] = useState();

  const closeModalHandler = () => {
    setModal(null);
  };
  const submitForm = (e) => {
    e.preventDefault();
    const username = nameInputRef.current.value;
    const age = ageInputRef.current.value;

    if (username.trim().length === 0 || age.trim().length === 0) {
      setModal({
        title: "Invalid Input",
        msg: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+age <= 0) {
      setModal({
        title: "An error occured",
        msg: "Please enter a valid age (>0).",
      });
      return;
    }
    const userDetails = {
      id: Math.random().toString(),
      username: username,
      age: +age,
    };

    props.onAddUser(userDetails);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  return (
    <React.Fragment>
      {modal && <Modal modal={modal} onClose={closeModalHandler} />}
      <div className="new-user__container">
        <form onSubmit={submitForm}>
          <div className="new-user__input">
            <label htmlFor="username">Username</label>
            <input id="username" ref={nameInputRef} type="text" />
          </div>
          <div className="new-user__input">
            <label htmlFor="age">Age (Years)</label>
            <input id="age" ref={ageInputRef} type="number" />
          </div>
          <div className="new-user__button">
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default NewUser;
