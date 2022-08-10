import React from "react";
import "./IconButton.css";

export const IconButton = ({ name, style, className }) => {
  return (
    <button
      className={`material-symbols-outlined icon-btn ${className}`}
      style={style}
    >
      {name}
    </button>
  );
};
