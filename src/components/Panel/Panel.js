import React from "react";
import "./Panel.css";

function Panel({ className = "", iconClassName = "", icon = "" }) {
  return (
    <div className={`dashboard-panel-ctn ${className}`}>
      <span
        className={`material-symbols-outlined dashboard-panel-icon ${iconClassName}`}
      >
        {icon}
      </span>
      <span className="dashboard-panel-txt">Orders</span>
      <span className="dashboard-panel-price">₦0</span>
    </div>
  );
}

export default Panel;
