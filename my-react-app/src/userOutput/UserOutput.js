import React from "react";

const userOutput = (props) => (
  <div className="UserOutput">
    <p> Hello, my name is {props.name} </p>
    <p onClick={props.click}>
       This is my first {props.library} project
    </p>
  </div>
);

export default userOutput;
