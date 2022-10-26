import axios from "axios";
import { setProcessing } from ".";
import { BASE_URL } from "../../constants";
import { Console, getCookie } from "../../utils";
import { UPDATE_ADMIN } from "../actiontypes";
import { refreshAccessToken } from "./signinform";

export const updateAdmin = (data = {}) => {
  return {
    type: UPDATE_ADMIN,
    payload: data,
  };
};

export const fetchAdmin = () => {
  return async (dispatch, state) => {
    try {
      const options = {
        headers: { Authorization: `Bearer ${getCookie("id1")}` },
      };

      dispatch(setProcessing("adminprocessing", true));
      let response = await axios.get(`${BASE_URL}/`, options);
      response = response?.data;
      dispatch(updateAdmin(response?.data?.storeowner));
      dispatch(setProcessing("adminprocessing", false));
      Console.warn("fetchAdmin", response?.data?.storeowner);
      dispatch(setProcessing("adminprocessing", false));
    } catch (err) {
      Console.warn("fetchAdmin err", String(err));
      dispatch(setProcessing("adminprocessing", "retry"));
      if (err?.response?.status == 401) {
        dispatch(refreshAccessToken());
      }
    }
  };
};
