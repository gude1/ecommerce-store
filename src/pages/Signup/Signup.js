import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const { signupform } = state;
  return (
    <div className="auth-ctn slideInUp">
      <div className="authform-ctn">
        <div className="authform-picctn"></div>
        <div className="authform-detailctn">
          <form
            className="authform"
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(signupUser(() => navigate("/auth/signin")));
            }}
          >
            <span className="authform-title">Create account</span>
            <Input
              placeholder={"Admin"}
              label={"Full Name"}
              className="authform-inputctn"
              labelClassName="authform-input-label"
              error={signupform?.errors?.name}
              inputProps={{
                className: "authform-input",
                minLength: 2,
                onChange: (e) => {
                  dispatch(
                    setSignupErrors({
                      name: "",
                      formerr: "",
                    })
                  );
                  dispatch(
                    setSignupInputs({
                      name: e.target.value,
                    })
                  );
                },
                value: signupform?.inputs?.name || "",
                name: "fullname",
                maxLength: 20,
                required: true,
              }}
            />

            <Input
              placeholder={"***@mail.com"}
              label={"Email"}
              className="authform-inputctn"
              error={signupform?.errors?.email}
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
              error={signupform?.errors?.password}
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

            {signupform?.errors?.formerr && (
              <span className="authform-errtxt">
                {signupform?.errors?.formerr}
              </span>
            )}

            <Button
              loading={signupform?.submitting}
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
