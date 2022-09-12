import { combineReducers } from "redux";
// import amountReducer from "./amountReducer";
import addItem from "./addItem";

export const reducers = combineReducers({
    // amount: amountReducer,
    number: addItem
})


export default reducers;
