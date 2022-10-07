import React from "react";
import "./DashOrder.css";
import Dropdown from "react-dropdown";
import Button from "../../components/ui/Button/Button";
import CustomTable from "../../components/CustomTable/CustomTable";
import Input from "../../components/ui/Input/Input";
import SubHeader from "../../components/SubHeader/SubHeader";

function DashOrder() {
  return (
    <div className="dash-ctn">
      <SubHeader
        title="Orders"
        className="dashboard-subheader"
        titleClassName="dashboard-subheader-title"
      />
      <div className="slideInUp">
        <div className="dash-panel">
          <Input
            placeholder={"search by name"}
            label={"search by  name"}
            className="dash-panel-input-ctn"
            inputProps={{
              className: "dash-panel-input",
              minLength: 2,
              name: "fullname",
              maxLength: 20,
              required: true,
            }}
          />
          <div className="dashproduct-dropdown-ctn">
            <Dropdown
              options={["Textile", "Cotton", "Wool", ""]}
              className="dash-panel-select-ctn"
              placeholder="Category"
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
          </div>
          <Button
            className="dash-panel-actionbtn"
            title="Download Orders Csv"
            buttonProps={{}}
            style={{ padding: "12px" }}
          />
        </div>

        <div className="custom-table-wrapper">
          <CustomTable
            headerData={[
              "Customer Name",
              "Customer Email",
              "Amount Paid",
              "Status",
            ]}
            bodyData={[
              [
                "Owolabi Gideon Iyinoluwa",
                "owoblowgidslab@gmail.com",
                "$200",
                "pending",
              ],
              [
                "Owolabi Gideon Iyinoluwa",
                "owoblowgidslab@gmail.com",
                "$200",
                "pending",
              ],
              [
                "Owolabi Gideon Iyinoluwa",
                "owoblowgidslab@gmail.com",
                "$200",
                "pending",
              ],
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default DashOrder;
