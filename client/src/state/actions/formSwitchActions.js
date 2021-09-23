import { FORM_SWITCH, SET_BODY, SET_CATEGORY } from "./types";

export const formSwitch = (formSwitch) => async (dispatch) => {
  dispatch({ type: FORM_SWITCH, payload: formSwitch });
};

export const setBody = (body) => async (dispatch) => {
  dispatch({ type: SET_BODY, payload: body });
};

export const setCategory = (category) => async (dispatch) => {
  dispatch({ type: SET_CATEGORY, payload: category });
};
