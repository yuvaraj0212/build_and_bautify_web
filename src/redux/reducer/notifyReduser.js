import { ActionTypes } from "../action/actionTypes";

const initial = {
  notify: 0,
  serviceNotify: 0,
};

export const notifyReduser = (state = initial, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_NOTIFY:
      return { ...state, notify: payload };
    case ActionTypes.GET_NOTIFY:
      return { ...state };
    case ActionTypes.DEL_NOTIFY:
      return { ...state, notify: payload };
    case ActionTypes.ADD_SERVICE_NOTIFY:
      return { ...state, serviceNotify: payload };
    case ActionTypes.GET_SERVICE_NOTIFY:
      return { ...state };
    case ActionTypes.DEL_SERVICE_NOTIFY:
      return { ...state, serviceNotify: payload };
    default:
      return state;
  }
};
