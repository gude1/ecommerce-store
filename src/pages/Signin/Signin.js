import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button/Button";
import Input from "../../components/ui/Input/Input";
import { Store } from "../../context";
import {
  logUserIn,
  setSigninErrors,
  setSigninInputs,
} from "../../context/actions/signinform";
import { getCookie } from "../../utils";
import "./Signin.css";

function Signin() {
  const { dispatch, state } = useContext(Store);
  const navigate = useNavigate();
  const { signinform } = state;
  return (
    <div className="auth-ctn slideInUp">
      <div className="authform-ctn">
        <div className="authform-picctn"></div>
        <div className="authform-detailctn">
          <form
            className="authform"
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(
                logUserIn(() => {
                  let path = !getCookie("has_store")
                    ? "/auth/createstore"
                    : "/dashboard";
                  navigate(path, { replace: true });
                })
              );
            }}
          >
            <span className="authform-title">Login</span>
            <Input
              placeholder={"***@mail.com"}
              label={"Email"}
              className="authform-inputctn"
              error={signinform?.errors?.email}
              labelClassName="authform-input-label"
              inputProps={{
                className: "authform-input",
                type: "email",
                minLength: 8,
                onChange: (e) => {
                  dispatch(
                    setSigninErrors({
                      email: "",
                      formerr: "",
                    })
                  );
                  dispatch(
                    setSigninInputs({
                      email: e.target.value,
                    })
                  );
                },
                value: signinform?.inputs?.email || "",
                name: "email",
                required: true,
              }}
            />

            <Input
              placeholder={"********"}
              label={"Password"}
              type="password"
              error={signinform?.errors?.password}
              className="authform-inputctn"
              labelClassName="authform-input-label"
              inputProps={{
                className: "authform-input",
                minLength: 8,
                onChange: (e) => {
                  dispatch(
                    setSigninErrors({
                      password: "",
                      formerr: "",
                    })
                  );
                  dispatch(
                    setSigninInputs({
                      password: e.target.value,
                    })
                  );
                },
                value: signinform?.inputs?.password || "",
                name: "password",
                required: true,
              }}
            />

            {signinform?.errors?.formerr && (
              <span className="authform-errtxt">
                {signinform?.errors?.formerr}
              </span>
            )}

            <Button
              title="Login"
              className="authform-actionbtn"
              loading={signinform?.submitting}
            />

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
