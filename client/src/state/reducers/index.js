import { combineReducers } from "redux";
import userCardReducer from "./userCardReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import formSwitchReducer from "./formSwitchReducer";

const reducers = combineReducers({
  card: userCardReducer,
  auth: authReducer,
  error: errorReducer,
  formSwitch: formSwitchReducer,
});

export default reducers;
