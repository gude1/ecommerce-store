import React from "react";
import "./DashCustomer.css";
import Button from "../../components/ui/Button/Button";
import Input from "../../components/ui/Input/Input";
import CustomTable from "../../components/CustomTable/CustomTable";
import SubHeader from "../../components/SubHeader/SubHeader";
import { useNavigate } from "react-router-dom";

function DashCustomer() {
  const navigate = useNavigate();
  return (
    <div className="dash-ctn">
      <SubHeader
        title="Customers"
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
          <Button
            className="dash-panel-actionbtn"
            title="Download Customers Csv"
            buttonProps={{
              onClick: () => {
                navigate("/dashboard/settings", { state: { goback: true } });
              },
            }}
            style={{ padding: "14px" }}
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

export default DashCustomer;
