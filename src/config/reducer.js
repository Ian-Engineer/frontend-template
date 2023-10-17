import { combineReducers } from "redux";
import userSlice from "./userSlice";
import homeSlice from "../main/home/store"

const rootReducer = combineReducers({
  userSlice,
  homeSlice
});

export default rootReducer;
