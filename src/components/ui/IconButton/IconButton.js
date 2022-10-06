import React from "react";
import "./IconButton.css";

function IconButton({
  name,
  style,
  className,
  btnClassName,
  titleClassName,
  titleStyle = {},
  onClick,
  title,
}) {
  return (
    <div className={`icon-btn-ctn ${className}`} onClick={onClick}>
      <button
        className={`material-symbols-outlined icon-btn ${btnClassName}`}
        style={style}
      >
        {name}
      </button>
      {title && (
        <span className={`icon-btn-txt ${titleClassName}`} style={titleStyle}>
          {title}
        </span>
      )}
    </div>
  );
}

export default IconButton;
