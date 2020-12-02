import React from "react";
import "./Person.css";

//Just a function def
const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm a {props.name} i am {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} />
    </div>
  );
};

export default person;
