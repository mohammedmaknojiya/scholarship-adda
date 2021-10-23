import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { RootReducer } from "./RootReducer";

const Store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default Store;
