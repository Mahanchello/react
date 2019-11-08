import React from "react";

const userInput = (props) => (
  <div className="Input">
    <input type="text" onChange={props.changed} value={props.library} value={props.currentLibrary} />
  </div>
);

export default userInput;
