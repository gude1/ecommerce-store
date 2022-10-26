import React, { useState, useLayoutEffect } from "react";
import "./DashSetting.css";
import SubHeader from "../../components/SubHeader/SubHeader";
import Button from "../../components/ui/Button/Button";
import Input from "../../components/ui/Input/Input";
import Tab from "../../components/ui/Tab/Tab";

function DashSetting() {
  const [tabindex, setTabIndex] = useState(0);
  const ismobile = window.innerWidth <= 912;

  useLayoutEffect(() => {
    let bottomTab = document.getElementsByClassName("dashboard-bottom-tab")[0];
    if (ismobile) {
      bottomTab.style.display = "none";
    }
    return () => {
      if (ismobile) bottomTab.style.display = "flex";
    };
  }, []);

  const renderUserInfoInputs = () => {
    return (
      <form
        className="dash-settings-form slideInUp"
        onSubmit={(e) => e.preventDefault()}
      >
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
              label="Store Name"
              labelClassName="authform-input-label settings-input-label"
              inputProps={{
                className: "authform-input settings-input",
              }}
            />
          </div>
        </div>

        {/* <span className="authform-errtxt"></span> */}
        <Button
          title="Update"
          style={{ minWidth: "120px", padding: "10px", width: "auto" }}
        />
      </form>
    );
  };

  const renderPaymentInputs = () => {
    return (
      <form
        className="dash-settings-form slideInUp"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="settings-test">
          <div>
            <Input
              className="authform-inputctn"
              label="PayStack "
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
        {/* <span className="authform-errtxt">sgsgsgsg</span> */}
        <Button
          title="Update"
          style={{ minWidth: "120px", padding: "10px", width: "auto" }}
        />
      </form>
    );
  };

  return (
    <div className="dash-ctn">
      <SubHeader
        title="Settings"
        className="dashboard-subheader"
        titleClassName="dashboard-subheader-title"
      />
      <div className="">
        <Tab
          tabs={[
            { name: "User Info", onClick: () => setTabIndex(0) },
            { name: "Payment & Billing Info", onClick: () => setTabIndex(1) },
          ]}
        />
        {tabindex == 0 && renderUserInfoInputs()}
        {tabindex == 1 && renderPaymentInputs()}
      </div>
    </div>
  );
}

export default DashSetting;
