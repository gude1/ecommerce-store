import React from "react";
import "./DashOrder.css";
import SubHeader from "../../components/SubHeader/SubHeader";

function DashOrder() {
  return (
    <div className="dash-ctn">
      <SubHeader
        title="Orders"
        className="dashboard-subheader"
        titleClassName="dashboard-subheader-title"
      />
      <div className="slideInUp"></div>
    </div>
  );
}

export default DashOrder;
