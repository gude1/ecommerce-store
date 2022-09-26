import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Console, isPath } from "../../utils";
import Button from "../ui/Button/Button";
import IconButton from "../ui/IconButton/IconButton";
import "./NavTab.css";

const selectedStyle = { color: "var(--blue)" };
function SideBar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="dashboard-sidebar-ctn slideInRight">
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
          buttonProps={{
            onClick: () => {
              navigate("/dashboard", { replace: true });
            },
          }}
          leftIconClass={"dashboard-sidebar-navbtn-icon"}
          leftIconStyle={isPath("/dashboard", true) ? selectedStyle : {}}
          title={"Dashboard"}
          titleStyle={isPath("/dashboard", true) ? selectedStyle : {}}
          titleClass={"dashboard-sidebar-navbtn-title"}
        />

        <Button
          className="dashboard-sidebar-navbtn"
          leftIcon={"inventory_2"}
          buttonProps={{
            onClick: () => {
              navigate("/dashboard/products", { replace: true });
            },
          }}
          leftIconClass={"dashboard-sidebar-navbtn-icon"}
          title={"Products"}
          titleClass={"dashboard-sidebar-navbtn-title"}
          titleStyle={isPath("/dashboard/products") ? selectedStyle : {}}
          leftIconStyle={isPath("/dashboard/products") ? selectedStyle : {}}
        />

        <Button
          className="dashboard-sidebar-navbtn"
          leftIcon={"sell"}
          buttonProps={{
            onClick: () => {
              navigate("/dashboard/orders", { replace: true });
            },
          }}
          leftIconClass={"dashboard-sidebar-navbtn-icon"}
          title={"Orders"}
          titleClass={"dashboard-sidebar-navbtn-title"}
          titleStyle={isPath("/dashboard/orders") ? selectedStyle : {}}
          leftIconStyle={isPath("/dashboard/orders") ? selectedStyle : {}}
        />

        <Button
          className="dashboard-sidebar-navbtn"
          leftIcon={"person_pin"}
          buttonProps={{
            onClick: () => {
              navigate("/dashboard/customers", { replace: true });
            },
          }}
          leftIconClass={"dashboard-sidebar-navbtn-icon"}
          title={"Customers"}
          titleClass={"dashboard-sidebar-navbtn-title"}
          titleStyle={isPath("/dashboard/customers") ? selectedStyle : {}}
          leftIconStyle={isPath("/dashboard/customers") ? selectedStyle : {}}
        />

        <Button
          className="dashboard-sidebar-navbtn"
          leftIconClass={"dashboard-sidebar-navbtn-icon"}
          leftIcon={"settings"}
          buttonProps={{
            onClick: () => {
              navigate("/dashboard/settings", { replace: true });
            },
          }}
          title={"Settings"}
          titleClass={"dashboard-sidebar-navbtn-title"}
          titleStyle={isPath("/dashboard/settings") ? selectedStyle : {}}
          leftIconStyle={isPath("/dashboard/settings") ? selectedStyle : {}}
        />
      </div>
    </div>
  );
}

function BottomTab() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="dashboard-bottom-tab">
      <IconButton
        name={"dashboard"}
        onClick={() => {
          navigate("/dashboard", { replace: true });
        }}
        className={
          isPath("/dashboard", true)
            ? "dashboard-bottom-tab-btn-active"
            : "dashboard-bottom-tab-btn"
        }
        title={"Dashboard"}
      />
      <IconButton
        name={"inventory_2"}
        onClick={() => {
          navigate("/dashboard/products", { replace: true });
        }}
        className={
          isPath("/dashboard/products")
            ? "dashboard-bottom-tab-btn-active"
            : "dashboard-bottom-tab-btn"
        }
        title={"Products"}
      />
      <IconButton
        name={"sell"}
        onClick={() => {
          navigate("/dashboard/orders", { replace: true });
        }}
        className={
          isPath("/dashboard/orders")
            ? "dashboard-bottom-tab-btn-active"
            : "dashboard-bottom-tab-btn"
        }
        title={"Orders"}
      />
      <IconButton
        name={"person_pin"}
        onClick={() => {
          navigate("/dashboard/customers", { replace: true });
        }}
        className={
          isPath("/dashboard/customers")
            ? "dashboard-bottom-tab-btn-active"
            : "dashboard-bottom-tab-btn"
        }
        title={"Customers"}
      />
    </div>
  );
}

function NavTab() {
  return (
    <>
      <SideBar />
      <BottomTab />
    </>
  );
}
export default NavTab;
