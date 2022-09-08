import React from "react";
import SubHeader from "../../components/SubHeader/SubHeader";
import "../../App.css";
import "./DashHome.css";

function DashHome() {
  return (
    <div>
      <SubHeader
        title="Dashboard Overview"
        className="dashboard-subheader"
        titleClassName="dashboard-subheader-title"
      />
    </div>
  );
}

export default DashHome;
