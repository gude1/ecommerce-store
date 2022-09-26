import React from "react";
import "./DashProduct.css";
import SubHeader from "../../components/SubHeader/SubHeader";

function DashProduct() {
  return (
    <div className="dash-ctn">
      <SubHeader
        title="Products"
        className="dashboard-subheader"
        titleClassName="dashboard-subheader-title"
      />
      <div className="slideInUp"></div>
    </div>
  );
}

export default DashProduct;
