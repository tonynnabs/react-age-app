import "./Result.css";
import React from "react";

const Result = (props) => {
    if(props.users.length === 0){
        return <h2>No Users.</h2>
    }
  return (
    <div className="result__container">
      <ul className="result__list">
        {props.users.map((user) => (
          <li key={user.id} className="result">{user.username} ({user.age} years old)</li>
        ))}
      </ul>
    </div>
  );
};

export default Result;
