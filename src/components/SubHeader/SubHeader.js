import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "../../App.css";
import "./SubHeader.css";

function SubHeader({ title = "SubHeader Title", show = false }) {
  const options = ["All", "Electronics", "Bags"];
  return (
    <header className="category-header">
      <div className="productdesc-ctn">
        <h3>{title}</h3>
      </div>
      <div>
        {show && (
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
              <span className="material-symbols-outlined category-select-arrow">
                arrow_drop_down
              </span>
            }
          />
        )}
      </div>
    </header>
  );
}

export default SubHeader;
