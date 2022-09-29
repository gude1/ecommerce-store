import React from "react";
import "./DashProduct.css";
import SubHeader from "../../components/SubHeader/SubHeader";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Input from "../../components/ui/Input/Input";
import Button from "../../components/ui/Button/Button";
import Modal from "../../components/ui/Modal/Modal";

import CustomTable from "../../components/CustomTable/CustomTable";

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
          <Button
            className="dash-panel-actionbtn"
            title="Add product"
            leftIcon={"add"}
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
      <Modal
        show={true}
        showdismissbtn
        ctnClassName={""}
        ctnStyle={{
          display: "flex",
          flexDirection: " column",
          overflow: "hidden",
          justifyContent: "center",
          alignItems: "center",
        }}
        contentCtnStyle={{
          width: "95%",
          maxWidth: "500px",
          borderRadius: "5px",
          maxHeight: "500px",
        }}
      >
        <form style={{ display: "flex", flexDirection: "column" }}>
          <Input
            placeholder={"Admin"}
            label={"Full Name"}
            className="authform-inputctn"
            labelClassName="authform-input-label"
            inputProps={{
              className: "authform-input",
              minLength: 2,
            }}
          />
          <Input
            placeholder={"Admin"}
            label={"Full Name"}
            className="authform-inputctn"
            labelClassName="authform-input-label"
            inputProps={{
              className: "authform-input",
              minLength: 2,
            }}
          />
          <Input
            placeholder={"Admin"}
            label={"Full Name"}
            className="authform-inputctn"
            labelClassName="authform-input-label"
            inputProps={{
              className: "authform-input",
              minLength: 2,
            }}
          />
          <Input
            placeholder={"Admin"}
            label={"Full Name"}
            className="authform-inputctn"
            labelClassName="authform-input-label"
            inputProps={{
              className: "authform-input",
              minLength: 2,
            }}
          />
          <Input
            placeholder={"Admin"}
            label={"Full Name"}
            className="authform-inputctn"
            labelClassName="authform-input-label"
            inputProps={{
              className: "authform-input",
              minLength: 2,
            }}
          />
          <Input
            placeholder={"Admin"}
            label={"Full Name"}
            className="authform-inputctn"
            labelClassName="authform-input-label"
            inputProps={{
              className: "authform-input",
              minLength: 2,
            }}
          />
        </form>
      </Modal>
    </div>
  );
}

export default DashProduct;
