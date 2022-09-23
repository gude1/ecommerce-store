import { isEmpty } from "../../utils";
import { RESET, PROCESSING, LOG_OUT, UPDATE_STORE } from "../actiontypes";

const INITIAL_STATE = {};

const handleProcessing = (key, value, state) => {
  if (isEmpty(key) || isEmpty(state) || isEmpty(value)) {
    return state;
  }
  switch (key) {
    default:
      return state;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_STORE:
      return { ...state, ...action.payload };
    case RESET:
      return action.payload == "storereducer" ? INITIAL_STATE : state;
    case PROCESSING:
      return handleProcessing(action.payload.key, action.payload.value, state);
    case LOG_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default { INITIAL_STATE, reducer };
