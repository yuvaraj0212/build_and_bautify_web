import { ActionTypes } from "./actionTypes"

export const getNotify=(notify)=>{
    return{
        type:ActionTypes.GET_NOTIFY,
        payload:notify
    }
}
export const delNotify=(notify)=>{
    return{
        type:ActionTypes.DEL_NOTIFY,
        payload:notify
    }
}