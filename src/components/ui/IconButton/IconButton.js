import React from "react";
import "./IconButton.css";

function IconButton({ name, style, className }) {
  return (
    <button
      className={`material-symbols-outlined icon-btn ${className}`}
      style={style}
    >
      {name}
    </button>
  );
}

export default IconButton;
