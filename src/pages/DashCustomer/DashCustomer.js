import React from "react";
import "./DashCustomer.css";
import SubHeader from "../../components/SubHeader/SubHeader";

function DashCustomer() {
  return (
    <div className="dash-ctn">
      <SubHeader
        title="Customers"
        className="dashboard-subheader"
        titleClassName="dashboard-subheader-title"
      />
      <div className="slideInUp"></div>
    </div>
  );
}

export default DashCustomer;
