import React from "react";

const userInput = (props) => {
  return (
    <div className="Input">
    <input type="text" onChange={props.changed} value={props.library} />
    </div>
  )
}

export default userInput;
