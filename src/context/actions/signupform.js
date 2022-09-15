import { Console, isEmpty } from "../../utils";
import { SET_SIGNUP_ERRORS, SET_SIGNUP_INPUTS } from "../actiontypes";
import axios from "axios";
import swal from "sweetalert";
import { setProcessing, setReset } from ".";

export const setSignupInputs = (data = {}) => {
  return {
    type: SET_SIGNUP_INPUTS,
    payload: data,
  };
};

export const setSignupErrors = (data = {}) => {
  return {
    type: SET_SIGNUP_ERRORS,
    payload: data,
  };
};

export const signupUser = (onSuccess, onFail) => {
  return async (dispatch, state) => {
    const { signupform } = state;
    try {
      let input_errs = {};
      let mailformat =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;

      dispatch(
        setSignupErrors({
          formerr: "",
          passsword: "",
          name: "",
          email: "",
        })
      );
      dispatch(setProcessing("signupprocessing", true));

      if (isEmpty(signupform)) {
        input_errs = {
          ...input_errs,
          formerr: "Inputs are empty please fill up your inputs",
        };
      }

      if (
        isEmpty(signupform?.inputs?.name) ||
        /\d/.test(signupform?.inputs?.name) ||
        signupform?.inputs?.name.length < 3 ||
        signupform?.inputs?.name.length > 20
      ) {
        input_errs = {
          ...input_errs,
          name: "Full name is required, must be letters and be between 3-20 characters",
        };
      }

      if (
        isEmpty(signupform?.inputs?.email) ||
        !mailformat.test(signupform?.inputs?.email) ||
        signupform?.inputs?.email < 8
      ) {
        input_errs = {
          ...input_errs,
          email: "Input must be of email format and be at least 8 characters",
        };
      }

      if (
        isEmpty(signupform?.inputs?.password) ||
        signupform?.inputs?.password.length < 8
      ) {
        input_errs = {
          ...input_errs,
          password: "Password is required, and must be at least 8 characters",
        };
      }

      if (!isEmpty(input_errs)) {
        dispatch(setProcessing("signupprocessing", false));
        dispatch(setSignupErrors(input_errs));
        return;
      }

      console.warn(signupform.inputs);
      const response = await axios.post(
        `http://localhost:4000/api/auth/signup`,
        signupform?.inputs
      );

      dispatch(setProcessing("signupprocessing", false));
      swal("Signup Successs!", "", "success").then((res) => {
        dispatch(setReset("signupform"));
        onSuccess && onSuccess();
      });
    } catch (err) {
      Console.warn("signupform err", err?.response?.data);
      dispatch(setProcessing("signupprocessing", false));
      swal("Signup Failed!", "", "error").then((res) => {
        if (String(err)?.indexOf("Network Error") > -1) {
          dispatch(
            setSignupErrors({
              formerr: "Network or server error, please try again",
            })
          );
          onFail && onFail();
          return;
        }

        dispatch(
          setSignupErrors({
            ...err?.response.data?.errors,
            formerr: "Request failed please check your inputs and try again",
          })
        );
        onFail && onFail();
      });
    }
  };
};
