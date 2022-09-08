import React from "react";
import "./Panel.css";

function Panel({ className = "", iconClassName = "", icon = "" }) {
  return (
    <div className={`dashboard-panel-ctn ${className}`}>
      <span className={`material-symbols-outlined ${iconClassName}`}>
        {icon}
      </span>
      <span className="dashboard-panel-ctn-txt"></span>
    </div>
  );
}

export default Panel;
