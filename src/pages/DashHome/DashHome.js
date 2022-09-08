import React from "react";
import SubHeader from "../../components/SubHeader/SubHeader";
import "../../App.css";
import "./DashHome.css";
import Panel from "../../components/Panel/Panel";

function DashHome() {
  return (
    <div>
      <SubHeader
        title="Dashboard Overview"
        className="dashboard-subheader"
        titleClassName="dashboard-subheader-title"
      />
      <div className="slideInUp">
        <div className="dash-home-first-section">
          <Panel icon="sell" className="dash-home-panel" />
          <Panel icon="sell" className="dash-home-panel" />
          <Panel icon="sell" className="dash-home-panel" />
        </div>
      </div>
    </div>
  );
}

export default DashHome;
