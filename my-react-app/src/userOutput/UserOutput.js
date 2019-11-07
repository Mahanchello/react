import React from "react";

const userOutput = (props) => {
  return (
    <div className="UserOutput">
    <p> Hello, my name is {props.name} </p>
    <p> This is my first {props.library} project </p>
    </div>
  )
}

export default userOutput;
