import { combineReducers } from "redux";
import genericReducer from "./genericReducer";

export default combineReducers({
  generic: genericReducer,
});
