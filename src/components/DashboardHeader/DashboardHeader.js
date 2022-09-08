import React from "react";
import IconButton from "../ui/IconButton/IconButton";
import "./DashboardHeader.css";

function DashboardHeader() {
  return (
    <nav className="dashboard-header-ctn">
      <div className="dashboard-header-logo-ctn">
        <img
          className="dashboard-header-logo"
          // https://cdn.looka.com/images/logos/looka_logo_black.svg
          src={
            // "https://dashtar-admin.vercel.app/static/media/logo-dark.acf69e90.svg"
            "https://www.tailorbrands.com/wp-content/uploads/2021/01/coca-cola-logo.jpg"

            // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTct01PK0ylQKeDyQyqzQFabAfyAHqrxuJ2mw&usqp=CAU"
            // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWqLkNic7vtDF-3QMUqg10oaN-hC-QYJUJI-kRcZx9Mg&s"
          }
        />
      </div>
      <div className="dashboard-header-items-ctn">
        <div>
          <IconButton
            name={"notifications"}
            btnClassName="dashboard-header-notebtn"
          />
        </div>
        <div className="dashboard-header-profileimg-ctn">
          <img
            src={"https://i.ibb.co/WpM5yZZ/9.png"}
            className="dashboard-header-profileimg"
          />
        </div>
      </div>
    </nav>
  );
}

export default DashboardHeader;
