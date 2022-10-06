import React, { useState } from "react";
import "./DashProduct.css";
import SubHeader from "../../components/SubHeader/SubHeader";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Input from "../../components/ui/Input/Input";
import Button from "../../components/ui/Button/Button";
import IconButton from "../../components/ui/IconButton/IconButton";
import Modal from "../../components/ui/Modal/Modal";

import CustomTable from "../../components/CustomTable/CustomTable";

function DashProduct() {
  const [showaddproductmodal, setShowAddProductModal] = useState(false);
  const [showaddproductcatmodal, setShowAddProductCatModal] = useState(false);

  // Component function starts here
  const renderAddProductModal = () => {
    return (
      <Modal
        show={showaddproductmodal}
        dismiss={() => setShowAddProductModal(false)}
        showdismissbtn
        ctnClassName={"addproductmodal"}
        contentCtnClassName="addproductmodalcontentCtn"
      >
        <span className="addproductmodalTitle">Add Product</span>

        <form
          className="addproductmodalForm"
          onSubmit={(e) => e.preventDefault()}
        >
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

          <Button title="Create Product" className="authform-actionbtn" />
        </form>
      </Modal>
    );
  };

  const renderAddProductCatModal = () => {
    return (
      <Modal
        show={showaddproductcatmodal}
        dismiss={() => setShowAddProductCatModal(false)}
        dismissBtnStyle={{ marginTop: "100px", marginBottom: "30px" }}
        showdismissbtn
        ctnStyle={{ justifyContent: "flex-start" }}
        contentCtnClassName="addproductcatmodalcontentCtn"
      >
        <span className="addproductmodalTitle">Add Product Category</span>
        <form
          className="addproductmodalForm"
          onSubmit={(e) => e.preventDefault()}
        >
          <Input
            placeholder={"ype in the category name"}
            label={"Catgory Name"}
            className="authform-inputctn"
            labelClassName="authform-input-label"
            inputProps={{
              className: "authform-input",
              minLength: 2,
            }}
          />

          <Button title="Add" className="addproductcatbtn" />
        </form>
      </Modal>
    );
  };
  //Component function ends here
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
            <IconButton
              name={"add_box"}
              onClick={() => setShowAddProductCatModal(true)}
              style={{ marginLeft: "8px", fontSize: "30px" }}
            />
          </div>
          <Button
            className="dash-panel-actionbtn"
            title="Add product"
            buttonProps={{
              onClick: () => setShowAddProductModal(true),
            }}
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
      {renderAddProductModal()}
      {renderAddProductCatModal()}
    </div>
  );
}

export default DashProduct;
