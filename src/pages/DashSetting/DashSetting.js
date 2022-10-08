import React, { useState } from "react";
import "./DashSetting.css";
import SubHeader from "../../components/SubHeader/SubHeader";
import Button from "../../components/ui/Button/Button";

function Tab({ tabs = ["Tab1", "Tab2"] }) {
  const [activetab, setActiveTab] = useState(0);
  const renderTabs = () => {
    return tabs.map((item, index) => {
      return (
        <button
          className={`tab-btn ${index == activetab && "tab-btn-active"}`}
          onClick={() => setActiveTab(index)}
          key={index}
        >
          {item}
        </button>
      );
    });
  };
  return <div className="tab-ctn">{renderTabs()}</div>;
}

function DashSetting() {
  return (
    <div className="dash-ctn">
      <SubHeader
        title="Settings"
        className="dashboard-subheader"
        titleClassName="dashboard-subheader-title"
      />
      <Tab />
      <div className="slideInUp"></div>
    </div>
  );
}

export default DashSetting;
