import React from "react";
import "./DashSetting.css";
import SubHeader from "../../components/SubHeader/SubHeader";

function DashSetting() {
  return (
    <div className="dash-ctn">
      <SubHeader
        title="Settings"
        className="dashboard-subheader"
        titleClassName="dashboard-subheader-title"
      />
      <div className="slideInUp"></div>
    </div>
  );
}

export default DashSetting;
