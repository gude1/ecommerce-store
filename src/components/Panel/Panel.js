import React from "react";
import "./Panel.css";

function Panel({
  className = "",
  style = {},
  iconClassName = "",
  icon = "",
  title = "Orders",
  amount = 0,
}) {
  // ₦
  return (
    <div className={`dashboard-panel-ctn ${className}`} style={style}>
      <span
        className={`material-symbols-outlined dashboard-panel-icon ${iconClassName}`}
      >
        {icon}
      </span>
      <span className="dashboard-panel-txt">{title}</span>
      <span className="dashboard-panel-price">{amount}</span>
    </div>
  );
}

export default Panel;
