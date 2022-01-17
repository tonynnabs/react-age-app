import React, { useState } from "react";
import "./App.css";

import NewUser from "./components/NewUser/NewUser";
import Result from "./components/Result/Result";

function App() {
  const [users, setUsers] = useState("");


  const addUserHandler = (userDetails) => {
    setUsers((prevState) => {
      return [userDetails, ...prevState];
    });
  };
  return (
    <div className="App">
      <NewUser onAddUser={addUserHandler} />
      <Result users={users} />
    </div>
  );
}

export default App;
