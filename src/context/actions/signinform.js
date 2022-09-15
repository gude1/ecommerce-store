import { Console, isEmpty, setCookie } from "../../utils";
import { SET_SIGNIN_ERRORS, SET_SIGNIN_INPUTS } from "../actiontypes";
import axios from "axios";
import jwtDecode from "jwt-decode";
import swal from "sweetalert";
import { setProcessing, setReset } from ".";
import { BASE_URL } from "../../constants";
import { updateAdmin } from "./admin";

export const setSigninInputs = (data = {}) => {
  return {
    type: SET_SIGNIN_INPUTS,
    payload: data,
  };
};

export const setSigninErrors = (data = {}) => {
  return {
    type: SET_SIGNIN_ERRORS,
    payload: data,
  };
};

export const logUserIn = (onSuccess, onFail) => {
  return async (dispatch, state) => {
    try {
      const { signinform } = state;
      if (
        isEmpty(signinform?.inputs?.email) ||
        isEmpty(signinform?.inputs?.password)
      ) {
        return;
      }
      dispatch(
        setSigninErrors({
          formerr: "",
          passsword: "",
          email: "",
        })
      );

      dispatch(setProcessing("signinprocessing", true));
      const response = await axios.post(
        `${BASE_URL}/auth/login`,
        signinform?.inputs
      );

      const decoded = jwtDecode(response?.data?.data?.access);

      Console.warn(decoded);
      return;

      if (!response?.data?.access || !response?.data?.refresh || !decoded) {
        dispatch(
          setSigninErrors({
            formerr: "Something went wrong with signin, please try again",
          })
        );
        Console.warn("logUser no access");
        return;
      }

      setCookie("id1", response?.data?.access, 0.00347222);
      setCookie("id2", response?.data?.refresh, 3);
      Console.warn("decoded", decoded);
      dispatch(
        updateAdmin({
          ...decoded,
        })
      );
      dispatch(setReset("signinform"));
      onSuccess && onSuccess();
      Console.warn("logUserIn", response.data.access);
    } catch (err) {
      Console.warn("logUserIn err", String(err));
      Console.warn("logUserIn err", err?.response?.data);
      if (String(err)?.indexOf("Network Error") > -1) {
        dispatch(
          setSigninErrors({
            formerr: "Network or server error, please try again",
          })
        );
      } else {
        dispatch(
          setSigninErrors({
            formerr:
              err?.response?.data?.detail ||
              "Request failed, please check your inputs and try again",
          })
        );
      }
      dispatch(setProcessing("signinprocessing", false));
      onFail && onFail();
    }
  };
};
