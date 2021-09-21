import { FORM_SWITCH } from "./types";

export const formSwitch = (formSwitch) => async (dispatch) => {
  dispatch({ type: FORM_SWITCH, payload: formSwitch });
};
