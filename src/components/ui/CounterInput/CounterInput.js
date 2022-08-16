import React from "react";
import "./CounterInput.css";
import IconButton from "../IconButton/IconButton";

function CounterInput() {
  return (
    <div className="counterinput-ctn">
      <IconButton name={"add"} className="counterinput-btn" />
      <div className="counterinput">
        <input autoFocus={false} value="1" style={{ width: "100%" }} />
      </div>
      <IconButton name={"remove"} className="counterinput-btn" />
    </div>
  );
}

export default CounterInput;
