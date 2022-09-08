import React from "react";
import "./IconButton.css";

function IconButton({
  name,
  style,
  className,
  btnClassName,
  titleClassName,
  onClick,
  title,
}) {
  return (
    <div className={`icon-btn-ctn ${className}`}>
      <button
        className={`material-symbols-outlined icon-btn ${btnClassName}`}
        style={style}
        onClick={onClick}
      >
        {name}
      </button>
      {title && (
        <span className={`icon-btn-txt ${titleClassName}`}>{title}</span>
      )}
    </div>
  );
}

export default IconButton;
