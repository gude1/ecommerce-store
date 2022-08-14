import React from "react";
import "./IconButton.css";

function IconButton({ name, style, className, onClick }) {
  return (
    <button
      className={`material-symbols-outlined icon-btn ${className}`}
      style={style}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export default IconButton;
