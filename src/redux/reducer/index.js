import { combineReducers } from "redux";
import { notifyReduser } from "./notifyReduser";



const reduser = combineReducers({
    notifycation:notifyReduser,
     
})
export default reduser;