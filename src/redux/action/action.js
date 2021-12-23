import  Axios  from "axios"
import { ActionTypes } from "./actionTypes"

export const AddNotify=(notify)=>{
    return{
        type:ActionTypes.ADD_NOTIFY,
        payload:notify
    }
}
// export const loadNotify=()=>{
//     return (dispatch)=>{
//         return  Axios({  method: 'get',url: `http://localhost:8080/notify`}).then(res=>{
//             dispatch(AddNotify(res.data.result))
//         })
//     }
// }
export const getNotify=()=>{
    return{
        type:ActionTypes.GET_NOTIFY,
    }
}
export const delNotify=(notify)=>{
    return{
        type:ActionTypes.DEL_NOTIFY,
        payload:notify
    }
}
