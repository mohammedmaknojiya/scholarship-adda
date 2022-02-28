import { combineReducers } from "redux";
import Reducer from "./Reducer";
import RequestReducer from "./RequestReducer";

export const RootReducer = combineReducers({
  Reducer: Reducer,
  RequestReducer: RequestReducer,
});
