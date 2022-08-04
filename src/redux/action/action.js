// import  Axios  from "axios"
import { ActionTypes } from "./actionTypes";

export const AddNotify = (notify) => {
  return {
    type: ActionTypes.ADD_NOTIFY,
    payload: notify,
  };
};

export const getNotify = () => {
  return {
    type: ActionTypes.GET_NOTIFY,
  };
};
export const delNotify = (notify) => {
  return {
    type: ActionTypes.DEL_NOTIFY,
    payload: notify,
  };
};

export const AddServiceNotify = (notify) => {
  return {
    type: ActionTypes.ADD_SERVICE_NOTIFY,
    payload: notify,
  };
};

export const getServiceNotify = () => {
  return {
    type: ActionTypes.GET_SERVICE_NOTIFY,
  };
};
export const delServiceNotify = (notify) => {
  return {
    type: ActionTypes.DEL_SERVICE_NOTIFY,
    payload: notify,
  };
};
