import React, { useState } from "react";
import Spinner from "../Spinner/Spinner";
import "./Select.css";

const Select = ({
  containerclassName = "",
  containerStyle = {},
  selectProps = {},
  selectStyle = {},
  selectClassName = "",
  label = "Select Label",
  labelStyle = {},
  error = "",
  errorStyle = {},
  info = "",
  infoStyle = {},
  listloading = false,
  listLoadingCtnStyle = {},
  children,
}) => {
  let loadingdiv = listloading ? (
    <div className="showlistctn w3-card w3-white" style={listLoadingCtnStyle}>
      <Spinner style={{ width: "20px", height: "20px" }} />
    </div>
  ) : null;
  return (
    <div
      className={`parentctn ${containerclassName} `}
      style={{
        ...containerStyle,
      }}
    >
      {loadingdiv}
      <div className="material-textfield">
        <select
          style={{ ...selectStyle }}
          {...selectProps}
          className={`${selectClassName}`}
        >
          {children}
        </select>
        <label style={{ ...labelStyle }}>{label}</label>
      </div>
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
export default Select;
