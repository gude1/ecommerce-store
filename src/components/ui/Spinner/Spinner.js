import React from "react";
import "./Spinner.css";

const Spinner = ({ style = {}, className = "" }) => {
  return <div id="spinner" className={`${className}`} style={style}></div>;
};

export default Spinner;
