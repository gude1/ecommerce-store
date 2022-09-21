import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button/Button";
import Input from "../../components/ui/Input/Input";
import { Store } from "../../context";
import { Console } from "../../utils";
import "./CreateStore.css";

function CreateStore() {
  const { dispatch, state } = useContext(Store);
  const navigate = useNavigate();
  const { admin } = state;
  console.warn("admin", admin);

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
