import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button/Button";
import Input from "../../components/ui/Input/Input";
import "./ForgotPass.css";

function ForgotPass() {
  return (
    <div className="auth-ctn slideInUp">
      <div className="authform-ctn">
        <div className="authform-picctn"></div>
        <div className="authform-detailctn">
          <form className="authform" onSubmit={(e) => e.preventDefault()}>
            <span className="authform-title">Forgot password</span>
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
            <Button title="Submit" className="authform-actionbtn" />

            <Link className="authform-link" to={"/auth"}>
              Create Account
            </Link>

            <Link className="authform-link" to={"/auth/signin"} replace>
              Login
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPass;
