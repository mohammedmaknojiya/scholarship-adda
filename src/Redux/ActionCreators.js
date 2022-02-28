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

export const changeStatusActive = (details) => {
  return {
    type: actionTypes.CHANGE_STATUS_ACTIVE,
    payload: details,
  };
};

export const changeStatusInActive = (details) => {
  return {
    type: actionTypes.CHANGE_STATUS_INACTIVE,
    payload: details,
  };
};

export const approveScholarship = (details) => {
  return {
    type: actionTypes.APPROVE_SCHOLARSHIP,
    payload: details,
  };
};

export const disapproveScholarship = (details) => {
  return {
    type: actionTypes.DIS_APPROVE_SCHOLARSHIP,
    payload: details,
  };
};

export const addApproveScholarship = (details) => {
  return {
    type: actionTypes.ADD_APPROVE_SCHOLARSHIP,
    payload: details,
  };
};
