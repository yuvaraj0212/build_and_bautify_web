import { createStore } from "redux";
import reduser from "./reducer/index"

const store =createStore(reduser,{});
export default store;