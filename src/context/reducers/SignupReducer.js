import { isEmpty } from "../../utils";
import {
  RESET,
  PROCESSING,
  LOG_OUT,
  SET_SIGNUP_INPUTS,
  SET_SIGNUP_ERRORS,
} from "../actiontypes";

const INITIAL_STATE = {
  inputs: {},
  errors: {},
  submitting: false,
};

const handleProcessing = (key, value, state) => {
  if (isEmpty(key) || isEmpty(state) || isEmpty(value)) {
    return state;
  }
  switch (key) {
    case "signupprocessing":
      return { ...state, submitting: value };
    default:
      return state;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_SIGNUP_INPUTS:
      return { ...state, inputs: { ...state.inputs, ...action.payload } };
    case SET_SIGNUP_ERRORS:
      return { ...state, errors: { ...state.errors, ...action.payload } };
    case RESET:
      return action.payload == "signupreducer" ? INITIAL_STATE : state;
    case PROCESSING:
      return handleProcessing(action.payload.key, action.payload.value, state);
    case LOG_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default { INITIAL_STATE, reducer };
