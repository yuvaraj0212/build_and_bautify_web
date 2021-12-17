import { ActionTypes } from "../action/actionTypes";

const initial = {
    notify: []
}

export const notifyReduser = (state = initial, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_NOTIFY:
            return { ...state, notify: payload };
            break;
        case ActionTypes.DEL_NOTIFY:
            return state;
            break;
        default:
            return state;
            break;
    }
}