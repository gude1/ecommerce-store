import React, { useState } from "react";
import "./DashSetting.css";
import SubHeader from "../../components/SubHeader/SubHeader";
import Button from "../../components/ui/Button/Button";
import Input from "../../components/ui/Input/Input";
import Tab from "../../components/ui/Tab/Tab";

function DashSetting() {
  return (
    <div className="dash-ctn">
      <SubHeader
        title="Settings"
        className="dashboard-subheader"
        titleClassName="dashboard-subheader-title"
      />
      <Tab tabs={[{ name: "User Info" }, { name: "Payment & Billing Info" }]} />
      <div className="slideInUp">
        <div className="settings-test">
          <Input />
          <Input />
        </div>
      </div>
    </div>
  );
}

export default DashSetting;
