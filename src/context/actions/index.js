import { LOG_OUT, PROCESSING, RESET } from "../actiontypes";

export const setReset = (data = "") => {
  return {
    type: RESET,
    payload: data,
  };
};

export const setProcessing = (key = "", value = "") => {
  return {
    type: PROCESSING,
    payload: { key, value },
  };
};

export const logOut = () => {
  return {
    type: LOG_OUT,
  };
};
