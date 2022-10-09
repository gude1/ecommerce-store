import React, { useState } from "react";
import "./Tab.css";

function Tab({ tabs = ["Tab1", "Tab2"] }) {
  const [activetab, setActiveTab] = useState(0);
  const renderTabs = () => {
    return tabs.map((item, index) => {
      return (
        <button
          className={`tab-btn ${index == activetab && "tab-btn-active"}`}
          onClick={() => {
            setActiveTab(index);
            item?.onClick && item?.onClick();
          }}
          key={index}
        >
          {item?.name}
        </button>
      );
    });
  };
  return <div className="tab-ctn">{renderTabs()}</div>;
}

export default Tab;
