import { toast } from "react-toastify";

export const BASE_URL = "http://localhost:4000/api";

export const REACT_TOAST_PENDING_OPTIONS = {
  closeOnClick: false,
  isLoading: true,
  autoClose: false,
  pauseOnHover: false,
  pauseOnFocusLoss: false,
  closeButton: false,
  hideProgressBar: true,
  position: "top-center",
};

export const REACT_TOAST_SUCCESS_OPTIONS = {
  closeOnClick: true,
  autoClose: 1000,
  type: toast.TYPE.SUCCESS,
  isLoading: false,
  pauseOnHover: false,
  pauseOnFocusLoss: false,
  closeButton: true,
  hideProgressBar: true,
  position: "top-center",
};

export const REACT_TOAST_ERROR_OPTIONS = {
  closeOnClick: false,
  autoClose: false,
  type: toast.TYPE.ERROR,
  isLoading: false,
  pauseOnHover: false,
  pauseOnFocusLoss: false,
  closeButton: true,
  hideProgressBar: true,
  position: "top-center",
};
