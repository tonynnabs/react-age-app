import React, { useState } from "react";
import Modal from "../Modal/Modal";
import Button from "../UI/Button";
import "./NewUser.css";

const NewUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [modal, setModal] = useState();

  const updateUsername = (e) => {
    setEnteredUsername(e.target.value);
  };
  const updateAge = (e) => {
    setEnteredAge(e.target.value);
  };

  const closeModalHandler = () => {
    setModal(null);
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setModal({
        title: "Invalid Input",
        msg: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge <= 0) {
      setModal({
        title: "An error occured",
        msg: "Please enter a valid age (>0).",
      });
      return;
    }
    const userDetails = {
      id: Math.random().toString(),
      username: enteredUsername,
      age: +enteredAge,
    };

    props.onAddUser(userDetails);

    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <div className="new-user__container">
      {modal && <Modal modal={modal} onClose={closeModalHandler} />}
      <form onSubmit={submitForm}>
        <div className="new-user__input">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={enteredUsername}
            onChange={updateUsername}
            type="text"
          />
        </div>
        <div className="new-user__input">
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            value={enteredAge}
            onChange={updateAge}
            type="number"
          />
        </div>
        <div className="new-user__button">
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
