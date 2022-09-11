import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button/Button";
import Input from "../../components/ui/Input/Input";
import "./Signin.css";

function Signin() {
  return (
    <div className="auth-ctn slideInUp">
      <div className="authform-ctn">
        <div className="authform-picctn"></div>
        <div className="authform-detailctn">
          <form className="authform" onSubmit={(e) => e.preventDefault()}>
            <span className="authform-title">Login</span>
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

            <Button title="Login" className="authform-actionbtn" />

            <Link className="authform-link" to={"/auth"}>
              Create an account
            </Link>

            <Link className="authform-link" to={"/auth/forgotpass"} replace>
              Forgot password
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
