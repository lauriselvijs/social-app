import axios from "axios";
import {
  GET_USER_CARDS,
  ADD_USER_CARD,
  DELETE_USER_CARD,
  USER_CARDS_LOADING,
  CLEAR_STATE,
} from "./types";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

export const getUserCards = () => async (dispatch, getState) => {
  function onSuccess(success) {
    dispatch({ type: GET_USER_CARDS, payload: success });
  }
  function onError(error) {
    dispatch(returnErrors(error.response.data, error.response.status));
  }
  try {
    dispatch(setUserCardsLoading());
    const success = await axios.get("/api/posts", tokenConfig(getState));
    return onSuccess(success.data.data);
  } catch (error) {
    return onError(error);
  }
};

export const addUserCard = (note) => async (dispatch, getState) => {
  function onSuccess() {
    dispatch({ type: ADD_USER_CARD, payload: note });
    return note;
  }
  function onError(error) {
    dispatch(returnErrors(error.response.data, error.response.status));
    return error;
  }
  try {
    await axios.post("/api/posts", note, tokenConfig(getState));
    return onSuccess();
  } catch (error) {
    return onError(error);
  }
};

export const deleteUserCard = (id) => async (dispatch, getState) => {
  function onSuccess() {
    dispatch({ type: DELETE_USER_CARD, payload: id });
    return id;
  }
  function onError(error) {
    dispatch(returnErrors(error.response.data, error.response.status));
    return error;
  }
  try {
    await axios.delete(`/api/posts/${id}`, tokenConfig(getState));
    return onSuccess();
  } catch (error) {
    return onError(error);
  }
};

export const clearState = () => (dispatch) => {
  dispatch({
    type: CLEAR_STATE,
  });
};

export const setUserCardsLoading = () => {
  return {
    type: USER_CARDS_LOADING,
  };
};
