import axios from "axios";
import swal from "sweetalert";
import { setProcessing, setReset } from ".";
import { BASE_URL } from "../../constants";
import { getCookie } from "../../utils";
import { SET_CREATESTORE_ERRORS, SET_CREATESTORE_INPUTS } from "../actiontypes";
import { refreshAccessToken } from "./signinform";
import { updateStore } from "./store";

export const setCreateStoreInputs = (data = {}) => {
  return {
    type: SET_CREATESTORE_INPUTS,
    payload: data,
  };
};

export const setCreateStoreErrors = (data = {}) => {
  return {
    type: SET_CREATESTORE_ERRORS,
    payload: data,
  };
};

export const createAStore = (onSuccess, onFail) => {
  return async (dispatch, state) => {
    const { createstoreform } = state;
    try {
      dispatch(
        setCreateStoreErrors({
          formerr: "",
          name: "",
          description: "",
          image: "",
        })
      );
      dispatch(setProcessing("createstoreprocessing", true));

      if (
        !createstoreform?.inputs?.image ||
        createstoreform?.inputs?.image?.size > 2000000
      ) {
      }

      const options = {
        headers: { Authorization: `Bearer ${getCookie("id1")}` },
      };
      const formData = new FormData();
      let inputs = createstoreform?.inputs;
      for (let key in inputs) {
        formData.append(key, inputs[key]);
      }
      const response = await axios.post(`${BASE_URL}/store`, formData, options);
      const res = response?.data;

      dispatch(updateStore({ ...res?.data?.store }));
      swal("Store Created!", "", "success").then((res) => {
        dispatch(setReset("createstoreform"));
        onSuccess && onSuccess();
      });
      dispatch(setProcessing("createstoreprocessing", false));
    } catch (err) {
      dispatch(setProcessing("createstoreprocessing", false));
      if (err?.response?.status == 401) {
        dispatch(refreshAccessToken());
      }
      dispatch(
        setCreateStoreErrors({
          formerr:
            "Something went wrong please check your inputs and try again",
        })
      );
      onFail && onFail();
    }
  };
};
