import React, { useState } from "react";
import { Console } from "../../../utils";
import IconButton from "../IconButton/IconButton";
import "./CounterInput.css";

function CounterInput({
  className = {},
  plusBtnClassName = {},
  minusBtnClassName = {},
  inputCtnClassName = {},
  inputProps = {},
}) {
  const [countnum, setCountNum] = useState(0);

  const setCount = (num, action) => {
    switch (action) {
      case "add":
        ++num;
        break;
      case "subtract":
        --num;
        break;
      default:
        break;
    }
    if (typeof num != "number" || num < 1) {
      num = 0;
    }
    setCountNum(num);
  };

  const inputChange = (e) => {
    let num = Number(e?.target?.value);
    if (typeof num != "number" || num < 1) {
      num = 0;
    }
    setCountNum(num);
  };

  return (
    <div className={`counterinput-ctn  ${className}`}>
      <IconButton
        name={"add"}
        className={`counterinput-btn ${plusBtnClassName}`}
        onClick={() => setCount(countnum, "add")}
      />
      <div className={`counterinput ${inputCtnClassName}`}>
        <input
          autoFocus={false}
          value={countnum}
          style={{ width: "100%" }}
          type={"tel"}
          onChange={(e) => {
            inputChange(e);
            inputProps?.onChange && inputProps?.onChange(e);
          }}
          {...inputProps}
        />
      </div>
      <IconButton
        name={"remove"}
        className={`counterinput-btn ${minusBtnClassName}`}
        onClick={() => setCount(countnum, "subtract")}
      />
    </div>
  );
}

export default CounterInput;
