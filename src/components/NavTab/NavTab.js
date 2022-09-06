import React from "react";
import Button from "../ui/Button/Button";
import "./NavTab.css";

function NavTab() {
  return (
    <div className="dashboard-sidebar-ctn slideInUp">
      <div className="dashboard-sidebar-logo-ctn">
        <img
          alt="Store Logo"
          className="dashboard-header-logo dashboard-sidebar-logo"
          src={
            "https://www.tailorbrands.com/wp-content/uploads/2021/01/coca-cola-logo.jpg"
            // "https://dashtar-admin.vercel.app/static/media/logo-dark.acf69e90.svg"
          }
        />
      </div>

      <div className="dashboard-sidebar-mainctn">
        <Button
          className="dashboard-sidebar-navbtn"
          leftIcon={"dashboard"}
          leftIconClass={"dashboard-sidebar-navbtn-icon"}
          title={"Dashboard"}
          titleClass={"dashboard-sidebar-navbtn-title"}
        />
        <Button
          className="dashboard-sidebar-navbtn"
          leftIcon={"inventory_2"}
          leftIconClass={"dashboard-sidebar-navbtn-icon"}
          title={"Products"}
          titleClass={"dashboard-sidebar-navbtn-title"}
        />

        <Button
          className="dashboard-sidebar-navbtn"
          leftIcon={"sell"}
          leftIconClass={"dashboard-sidebar-navbtn-icon"}
          title={"Orders"}
          titleClass={"dashboard-sidebar-navbtn-title"}
        />

        <Button
          className="dashboard-sidebar-navbtn"
          leftIcon={"person_pin"}
          leftIconClass={"dashboard-sidebar-navbtn-icon"}
          title={"Customers"}
          titleClass={"dashboard-sidebar-navbtn-title"}
        />

        <Button
          className="dashboard-sidebar-navbtn"
          leftIconClass={"dashboard-sidebar-navbtn-icon"}
          leftIcon={"settings"}
          title={"Settings"}
          titleClass={"dashboard-sidebar-navbtn-title"}
        />
      </div>
    </div>
  );
}
export default NavTab;
