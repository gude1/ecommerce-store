import { Console } from "../../utils";
import { SET_SIGNUP_ERRORS, SET_SIGNUP_INPUTS } from "../actiontypes";

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

export const signupUser = () => {
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
          fullname: "",
          email: "",
        })
      );
      dispatch(setProcessing("signupsubmit", true));

      if (isEmpty(signupform)) {
        input_errs = {
          ...input_errs,
          formerr: "Inputs are empty please fill up your inputs",
        };
      }

      if (
        isEmpty(signupform?.inputs?.fullname) ||
        /\d/.test(signupform?.inputs?.fullname) ||
        signupform?.inputs?.fullname.length < 3 ||
        signupform?.inputs?.fullname.length > 20
      ) {
        input_errs = {
          ...input_errs,
          fullname:
            "Full name is required, must be letters and be between 3-20 characters",
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

      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/`, {
        ...signupform?.inputs,
        referred_by: signupform?.inputs?.referred_by || null,
      });

      Console.warn("response", response.data);
      dispatch(setProcessing("signupsubmit", false));
      toast(
        "Signup success!, please check your mail to complete your verification",
        { ...REACT_TOAST_SUCCESS_OPTIONS, autoClose: false }
      );
      dispatch(setReset("signupform"));
    } catch (err) {
      if (String(err)?.indexOf("Network Error") > -1) {
        dispatch(
          setSignupErrors({
            formerr: "Network or server error, please try again",
          })
        );
        Console.warn("signupUser response", err?.response?.status);
        dispatch(setProcessing("signupsubmit", false));
        return;
      }
      dispatch(setProcessing("signupsubmit", false));
    }
  };
};
