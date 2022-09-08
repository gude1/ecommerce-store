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
        <Panel />
      </div>
    </div>
  );
}

export default DashHome;
