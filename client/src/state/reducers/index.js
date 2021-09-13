import { combineReducers } from "redux";
import userCardReducer from "./userCardReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

const reducers = combineReducers({
  note: userCardReducer,
  auth: authReducer,
  error: errorReducer,
});

export default reducers;
