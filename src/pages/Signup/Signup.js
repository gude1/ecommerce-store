import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button/Button";
import Input from "../../components/ui/Input/Input";
import { Store } from "../../context";
import {
  setSignupErrors,
  setSignupInputs,
  signupUser,
} from "../../context/actions/signupform";
import { Console } from "../../utils";
import "./Signup.css";

function Signup() {
  const { dispatch, state } = useContext(Store);
  const { signupform } = state;
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
                minLength: 2,
                onChange: (e) => {
                  dispatch(
                    setSignupInputs({
                      firstname: "",
                      formerr: "",
                    })
                  );
                  dispatch(
                    setSignupErrors({
                      firstname: e.target.value,
                    })
                  );
                },
                value: signupform?.inputs?.firstname || "",
                name: "firstname",
                maxLength: 20,
                required: true,
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
                minLength: 8,
                onChange: (e) => {
                  dispatch(
                    setSignupErrors({
                      email: "",
                      formerr: "",
                    })
                  );
                  dispatch(
                    setSignupInputs({
                      email: e.target.value,
                    })
                  );
                },
                value: signupform?.inputs?.email || "",
                name: "email",
                required: true,
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
                minLength: 8,
                onChange: (e) => {
                  dispatch(
                    setSignupErrors({
                      password: "",
                      formerr: "",
                    })
                  );
                  dispatch(
                    setSignupInputs({
                      password: e.target.value,
                    })
                  );
                },
                value: signupform?.inputs?.password || "",
                name: "password",
                required: true,
              }}
            />

            <Button
              loading={signupform?.submitting}
              buttonProps={{
                onClick: () => dispatch(signupUser()),
              }}
              title="Create Account"
              className="authform-actionbtn"
            />

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
