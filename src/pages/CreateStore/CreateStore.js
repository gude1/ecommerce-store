import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button/Button";
import Input from "../../components/ui/Input/Input";
import "./CreateStore.css";

function CreateStore() {
  return (
    <div className="auth-ctn slideInUp">
      <div className="authform-ctn">
        <div className="authform-picctn"></div>
        <div className="authform-detailctn">
          <form className="authform" onSubmit={(e) => e.preventDefault()}>
            <span className="authform-title">Store Info</span>
            <Input
              label="Store Name"
              placeholder={"Nixmar & swag"}
              type={"text"}
              className="authform-inputctn"
              labelClassName="authform-input-label"
              inputProps={{
                className: "authform-input",
                name: "bussinessname",
              }}
            />

            <Input
              label="Bussiness Address"
              type={"search"}
              placeholder={"Nixmar & swag"}
              className="authform-inputctn"
              labelClassName="authform-input-label"
              inputProps={{
                className: "authform-input",
              }}
            />

            <Input
              label="Bussiness State"
              type={"search"}
              placeholder={"Nixmar & swag"}
              className="authform-inputctn"
              labelClassName="authform-input-label"
              inputProps={{
                className: "authform-input",
              }}
            />

            <Button title="Submit" className="authform-actionbtn" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateStore;
