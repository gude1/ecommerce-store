import React from "react";
import "./NavTab.css";

function NavTab() {
  return (
    <div className="dashboard-sidebar-ctn">
      <div className="dashboard-sidebar-logo-ctn">
        <img
          className="dashboard-header-logo"
          src={
            "https://dashtar-admin.vercel.app/static/media/logo-dark.acf69e90.svg"
            // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWqLkNic7vtDF-3QMUqg10oaN-hC-QYJUJI-kRcZx9Mg&s"
          }
        />
      </div>
    </div>
  );
}
export default NavTab;
