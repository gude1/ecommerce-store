import { isEmpty } from "../../utils";
import { RESET, PROCESSING, LOG_OUT, UPDATE_ADMIN } from "../actiontypes";

const INITIAL_STATE = {
  admin: {},
  fetching: false,
};

const handleProcessing = (key, value, state) => {
  if (isEmpty(key) || isEmpty(state) || isEmpty(value)) {
    return state;
  }
  switch (key) {
    case "adminprocessing":
      return { ...state, fetching: value };
    default:
      return state;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_ADMIN:
      return { ...state, admin: { ...state.admin, ...action.payload } };
    case RESET:
      return action.payload == "adminreducer" ? INITIAL_STATE : state;
    case PROCESSING:
      return handleProcessing(action.payload.key, action.payload.value, state);
    case LOG_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default { INITIAL_STATE, reducer };
