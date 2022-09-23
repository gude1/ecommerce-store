import React, { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button/Button";
import Input from "../../components/ui/Input/Input";
import { Store } from "../../context";
import {
  setCreateStoreErrors,
  setCreateStoreInputs,
} from "../../context/actions/createstoreform";
import { Console } from "../../utils";
import "./CreateStore.css";

function CreateStore() {
  const { dispatch, state } = useContext(Store);
  const storelogoinputref = useRef();
  const navigate = useNavigate();
  const { createstoreform } = state;

  return (
    <div className="auth-ctn slideInUp">
      <div className="authform-ctn">
        <div className="authform-picctn"></div>
        <div className="authform-detailctn">
          <form
            className="authform"
            onSubmit={(e) => {
              e.preventDefault();
              Console.warn(createstoreform);
            }}
          >
            <span className="authform-title">Store Info</span>
            <Input
              label="Store Name"
              placeholder={"Nixmar & swag"}
              type={"text"}
              error={createstoreform?.errors?.name}
              className="authform-inputctn"
              labelClassName="authform-input-label"
              inputProps={{
                className: "authform-input",
                name: "storename",
                minLength: 3,
                maxLength: 20,
                onChange: (e) => {
                  dispatch(
                    setCreateStoreErrors({
                      name: "",
                      formerr: "",
                    })
                  );
                  dispatch(
                    setCreateStoreInputs({
                      name: e.target.value,
                    })
                  );
                },
                value: createstoreform?.inputs?.name || "",
                required: true,
              }}
            />

            <Input
              label="Store Description"
              type={"text"}
              error={createstoreform?.errors?.description}
              placeholder={"e.g we sell crochets"}
              className="authform-inputctn"
              labelClassName="authform-input-label"
              inputProps={{
                className: "authform-input",
                minLength: 8,
                maxLength: 30,
                onChange: (e) => {
                  dispatch(
                    setCreateStoreErrors({
                      description: "",
                      formerr: "",
                    })
                  );
                  dispatch(
                    setCreateStoreInputs({
                      description: e.target.value,
                    })
                  );
                },
                value: createstoreform?.inputs?.description || "",
                name: "storedesc",
                required: true,
              }}
            />

            <Input
              label="Bussiness State"
              type={"file"}
              error={createstoreform?.errors?.logo}
              placeholder={"Nixmar & swag"}
              className="authform-inputctn"
              labelClassName="authform-input-label"
              inputProps={{
                className: "authform-input",
                ref: storelogoinputref,
                name: "storelogo",
                accept: "image/jpeg,image/jpg,image/png",
                onChange: (e) => {
                  dispatch(setCreateStoreInputs({ logo: e?.target?.files[0] }));
                  dispatch(
                    setCreateStoreErrors({
                      formerr: "",
                      logo: "",
                    })
                  );
                },
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
