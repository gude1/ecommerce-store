import {
  Console,
  deleteCookie,
  getCookie,
  isEmpty,
  setCookie,
} from "../../utils";
import { SET_SIGNIN_ERRORS, SET_SIGNIN_INPUTS } from "../actiontypes";
import axios from "axios";
import jwtDecode from "jwt-decode";
import swal from "sweetalert";
import { logOut, setProcessing, setReset } from ".";
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
      const res = response?.data;
      const decoded = jwtDecode(res?.data?.access);

      if (!res?.data?.access || !res?.data?.refresh || !decoded) {
        dispatch(
          setSigninErrors({
            formerr: "Something went wrong with signin, please try again",
          })
        );
        return;
      }

      setCookie("id1", res?.data?.access, 1);
      setCookie("id2", res?.data?.refresh, 1);
      setCookie("has_store", decoded?.has_store, 1);
      dispatch(
        updateAdmin({
          ...decoded,
        })
      );
      swal("Login Successs!", "", "success").then((res) => {
        dispatch(setReset("signinform"));
        onSuccess && onSuccess();
      });
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
              err?.response?.data?.error ||
              "Request failed, please check your inputs and try again",
          })
        );
      }
      dispatch(setProcessing("signinprocessing", false));
      onFail && onFail();
    }
  };
};

export const logUserOut = () => {
  return async (dispatch, state) => {
    try {
      deleteCookie("id1");
      deleteCookie("id2");
      deleteCookie("has_store");
      dispatch(logOut());
    } catch (err) {
      Console.warn(`logUserOut`, String(err));
    }
  };
};

export const refreshAccessToken = (okAction, failedAction) => {
  let retrycount = 0;
  return async (dispatch, state) => {
    try {
      let refresh = getCookie("id2");
      if (isEmpty(refresh)) {
        dispatch(logUserOut());
        failedAction && failedAction();
        return;
      }
      const response = await axios.post(`${BASE_URL}/auth/refreshtoken`, {
        refresh,
      });
      const { data, success } = response?.data;
      let decoded = isEmpty(data?.access) ? null : jwtDecode(data?.access);
      if (decoded) {
        setCookie("id1", data?.access);
        setCookie("has_store", decoded?.has_store);
        okAction && okAction();
      }
      Console.warn("refreshAccessToken", data);
    } catch (err) {
      Console.warn("refreshAccessToken err", String(err));
      Console.warn("refreshAccessToken err", err?.response);
      if (
        String(err).indexOf("Network Error") > -1 ||
        err?.response?.status == 500
      ) {
        if (retrycount <= 5) {
          ++retrycount;
          dispatch(refreshAccessToken());
        } else {
          retrycount = 0;
        }
        return;
      }
      dispatch(logUserOut());
      failedAction && failedAction();
    }
  };
};
