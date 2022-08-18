import React, { useState } from "react";
import Spinner from "../Spinner/Spinner";
import "./Input.css";

const Input = ({
  className,
  type = "text",
  placeholder,
  containerStyle = {},
  desc = "",
  descStyle,
  leftComponent,
  rightComponent,
  inputStyle,
  labelStyle,
  labelClassName = "",
  label = "First Name*",
  iconStyle = {},
  error = "",
  errorStyle = {},
  id = "",
  info = "",
  infoStyle = {},
  listloading = false,
  listLoadingCtnStyle = {},
  inputProps = {},
}) => {
  const [showpass, setShowPass] = useState(false);
  let inputtype = inputProps?.type || type;
  inputtype = showpass == true ? "text" : inputtype;
  inputStyle = info
    ? { ...inputStyle, outline: "0", border: "2px solid #4CAF50" }
    : inputStyle;
  labelStyle = info ? { ...labelStyle, color: " #4CAF50" } : labelStyle;
  inputStyle = error
    ? { ...inputStyle, outline: "0", border: "2px solid #F93232" }
    : inputStyle;
  labelStyle = error ? { ...labelStyle, color: " #F93232" } : labelStyle;
  let loadingdiv = listloading ? (
    <div className="showlistctn w3-card w3-white" style={listLoadingCtnStyle}>
      <Spinner style={{ width: "20px", height: "20px" }} />
    </div>
  ) : null;

  const showDesc = () => {
    if (error || info) {
      return null;
    }
    if (desc) {
      return (
        <span className="w3-tiny desctxt " style={{ ...descStyle }}>
          {desc}
        </span>
      );
    }
  };

  /**COMPONENT FUNCTION STARTS HERE */
  return (
    <div
      className={`parentctn ${className} `}
      style={{
        ...containerStyle,
      }}
    >
      {loadingdiv}
      <div className="material-textfield">
        {leftComponent}
        <input
          placeholder={placeholder || label}
          type={inputtype}
          style={{
            ...inputStyle,
          }}
          {...inputProps}
        />
        <label className={`${labelClassName}`} style={{ ...labelStyle }}>
          {label}
        </label>
        {type == "password" && (
          <span
            className="material-symbols-outlined w3-text-gray icon"
            onClick={() => setShowPass(!showpass)}
            style={{
              alignSelf: "center",
              position: "absolute",
              cursor: "pointer",
              right: "10px",
              ...iconStyle,
            }}
          >
            {showpass ? "visibility_off" : "visibility"}
          </span>
        )}

        {rightComponent}
      </div>
      {showDesc()}
      {error && (
        <span className="w3-tiny errortxt" style={{ ...errorStyle }}>
          {error}
        </span>
      )}

      {info && (
        <span className="w3-tiny infotxt" style={{ ...infoStyle }}>
          {info}
        </span>
      )}
    </div>
  );
};

export default Input;
