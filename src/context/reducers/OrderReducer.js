import { isEmpty } from "../../utils";
import { RESET, PROCESSING, LOG_OUT } from "../actiontypes";

const INITIAL_STATE = {
  list: [],
  fetching: false,
};

const handleProcessing = (key, value, state) => {
  if (isEmpty(key) || isEmpty(state) || isEmpty(value)) {
    return state;
  }
  switch (key) {
    case "orderfetching":
      return { ...state, fetching: value };
    default:
      return state;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case RESET:
      return action.payload == "productreducer" ? INITIAL_STATE : state;
    case PROCESSING:
      return handleProcessing(action.payload.key, action.payload.value, state);
    case LOG_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default { INITIAL_STATE, reducer };
