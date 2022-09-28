import React from "react";
import "./DashProduct.css";
import SubHeader from "../../components/SubHeader/SubHeader";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Input from "../../components/ui/Input/Input";
import Select from "../../components/ui/Select/Select";
import Button from "../../components/ui/Button/Button";

function DashProduct() {
  return (
    <div className="dash-ctn">
      <SubHeader
        title="Products"
        className="dashboard-subheader"
        titleClassName="dashboard-subheader-title"
      />
      <div className="slideInUp">
        <div className="dash-panel">
          <Input
            placeholder={"search by product name"}
            label={"search by product name"}
            className="dash-panel-input-ctn"
            inputProps={{
              className: "dash-panel-input",
              minLength: 2,
              name: "fullname",
              maxLength: 20,
              required: true,
            }}
          />

          <Dropdown
            options={["Textile", "Cotton", "Wool", ""]}
            className="dash-panel-select-ctn"
            placeholder="Textile"
            controlClassName="dash-panel-select-control"
            placeholderClassName="dash-panel-select-placeholder"
            arrowOpen={
              <span className="material-symbols-outlined dash-panel-select-dropicon">
                arrow_drop_up
              </span>
            }
            arrowClosed={
              <span className="material-symbols-outlined dash-panel-select-dropicon">
                arrow_drop_down
              </span>
            }
          />
          <Button className="dash-panel-actionbtn" title="Add product" />
        </div>
      </div>
    </div>
  );
}

export default DashProduct;
