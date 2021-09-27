import { combineReducers } from "redux";
import userCardReducer from "./userCardReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import formSwitchReducer from "./formSwitchReducer";
import pageReducer from "./pgeReducer";

const reducers = combineReducers({
  card: userCardReducer,
  auth: authReducer,
  error: errorReducer,
  formSwitch: formSwitchReducer,
  page: pageReducer,
});

export default reducers;
