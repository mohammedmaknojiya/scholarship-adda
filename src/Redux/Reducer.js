import * as actionType from "./ActionTypes";
import { data } from "../components/data";

const Reducer = (state = data, action) => {
  switch (action.type) {
    case actionType.ADD_SCHOLARSHIP:
      return { ...state };
    case actionType.REMOVE_SCHOLARSHIP:
      return;
    case actionType.CHANGE_STATUS_ACTIVE:
      return;
    case actionType.CHANGE_STATUS_INACTIVE:
      return;
    case actionType.APPROVE_SCHOLARSHIP:
      return;
    default:
      return { ...state };
  }
};

export default Reducer;
