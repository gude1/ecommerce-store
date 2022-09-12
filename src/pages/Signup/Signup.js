import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button/Button";
import Input from "../../components/ui/Input/Input";
import { Store } from "../../context";
import { Console } from "../../utils";
import "./Signup.css";

function Signup() {
  const { dispatch, state } = useContext(Store);
  return (
    <div className="auth-ctn slideInUp">
      <div className="authform-ctn">
        <div className="authform-picctn"></div>
        <div className="authform-detailctn">
          <form className="authform" onSubmit={(e) => e.preventDefault()}>
            <span className="authform-title">Create account</span>
            <Input
              placeholder={"Admin"}
              label={"Full Name"}
              className="authform-inputctn"
              labelClassName="authform-input-label"
              inputProps={{
                className: "authform-input",
              }}
            />
            <Input
              placeholder={"***@mail.com"}
              label={"Email"}
              className="authform-inputctn"
              labelClassName="authform-input-label"
              inputProps={{
                className: "authform-input",
                type: "email",
              }}
            />

            <Input
              placeholder={"********"}
              label={"Password"}
              type="password"
              className="authform-inputctn"
              labelClassName="authform-input-label"
              inputProps={{
                className: "authform-input",
              }}
            />

            <Button title="Create Account" className="authform-actionbtn" />

            <Link className="authform-link" to={"signin"}>
              Already have an account?Login
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
