import React from "react";
import Spinner from "../Spinner/Spinner";
import "./Button.css";

const Button = ({
  style = {},
  rightIcon,
  rightIconStyle = {},
  titleClass = "",
  leftIconClass,
  rightIconClass,
  leftIcon,
  leftIconStyle = {},
  title = "Button",
  titleStyle = {},
  buttonProps = {},
  loading = false,
  disabled = false,
  className = "",
}) => {
  //console.warn("Title", titleClass);
  leftIcon =
    leftIcon && loading != true ? (
      typeof leftIcon == "string" ? (
        <span
          className={`material-symbols-outlined ${leftIconClass}`}
          style={leftIconStyle}
        >
          {leftIcon}
        </span>
      ) : (
        <span className={`${leftIconClass}`} style={leftIconStyle}>
          {leftIcon}
        </span>
      )
    ) : null;
  rightIcon =
    rightIcon && loading != true ? (
      typeof rightIcon == "string" ? (
        <span
          className={`material-symbols-outlined ${rightIconClass}`}
          style={rightIconStyle}
        >
          {rightIcon}
        </span>
      ) : (
        <span className={`${rightIconClass}`} style={rightIconStyle}>
          {rightIcon}
        </span>
      )
    ) : null;
  title =
    title && loading != true ? (
      <p style={titleStyle} className={`${titleClass}`}>
        {title}
      </p>
    ) : null;
  loading = loading ? (
    <Spinner style={{ width: "20px", height: "20px" }} />
  ) : null;

  return (
    <>
      <button
        className={`custombtn ${className}`}
        style={style}
        disabled={disabled || loading}
        {...buttonProps}
      >
        {loading}
        {leftIcon}
        {title}
        {rightIcon}
      </button>
    </>
  );
};

export default Button;
