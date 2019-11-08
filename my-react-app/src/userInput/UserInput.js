import React from "react";

const userInput = (props) => (
  <div className="Input">
    <input type="text" onChange={props.changed} value={props.library} />
  </div>
);

export default userInput;
