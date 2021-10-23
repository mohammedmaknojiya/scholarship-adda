import * as actionTypes from "./ActionTypes";

export const addScholarship = (details) => {
  return {
    type: actionTypes.ADD_SCHOLARSHIP,
    payload: details,
  };
};

export const removeScholarship = (details) => {
  return {
    type: actionTypes.REMOVE_SCHOLARSHIP,
    payload: details,
  };
};
