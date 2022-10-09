import React, { useState, useEffect } from "react";
import "./DashSetting.css";
import SubHeader from "../../components/SubHeader/SubHeader";
import Button from "../../components/ui/Button/Button";
import Input from "../../components/ui/Input/Input";
import Tab from "../../components/ui/Tab/Tab";

function DashSetting() {
  const ismobile = window.innerHeight >= 912;
  useEffect(() => {
    let bottomTab = document.getElementsByClassName("dashboard-bottom-tab")[0];
    if (ismobile) {
      bottomTab.style.display = "none";
    }
  }, []);

  return (
    <div className="dash-ctn">
      <SubHeader
        title="Settings"
        className="dashboard-subheader"
        titleClassName="dashboard-subheader-title"
      />
      <div className="">
        <Tab
          tabs={[{ name: "User Info" }, { name: "Payment & Billing Info" }]}
        />
        <div className="settings-test">
          <div>
            <Input
              className="authform-inputctn"
              label="Name"
              labelClassName="authform-input-label settings-input-label"
              inputProps={{
                className: "authform-input settings-input",
              }}
            />
          </div>
          <div>
            <Input
              className="authform-inputctn"
              label="Email"
              labelClassName="authform-input-label settings-input-label"
              inputProps={{
                className: "authform-input settings-input",
              }}
            />
          </div>
          <div>
            <Input
              className="authform-inputctn"
              label="Email"
              labelClassName="authform-input-label settings-input-label"
              inputProps={{
                className: "authform-input settings-input",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashSetting;
