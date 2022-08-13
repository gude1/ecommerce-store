import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "../../App.css";
import "./SubHeader.css";

export default function SubHeader() {
  const options = ["All", "Electronics", "Bags"];
  return (
    <header className="category-header slideInRight">
      <div className="productdesc-ctn">
        <h3>Product List</h3>
      </div>
      <div>
        <Dropdown
          options={options}
          placeholder="Product Category"
          controlClassName="category-select-control"
          arrowOpen={
            <span className="material-symbols-outlined category-select-arrow">
              arrow_drop_up
            </span>
          }
          arrowClosed={
            <span class="material-symbols-outlined category-select-arrow">
              arrow_drop_down
            </span>
          }
        />
      </div>
    </header>
  );
}
