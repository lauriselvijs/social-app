import axios from "axios";
import {
  GET_USER_CARDS,
  ADD_USER_CARD,
  EDIT_USER_CARD,
  DELETE_USER_CARD,
  USER_CARDS_LOADING,
  CLEAR_STATE,
} from "./types";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

export const getUserCards = () => async (dispatch, getState) => {
  const page = getState().page;

  function onSuccess(success) {
    dispatch({ type: GET_USER_CARDS, payload: success });
  }
  function onError(error) {
    dispatch(returnErrors(error.response.data, error.response.status));
  }
  try {
    dispatch(setUserCardsLoading());
    const success = await axios.post(
      "/api/posts/all",
      page,
      tokenConfig(getState)
    );
    return onSuccess(success.data);
  } catch (error) {
    return onError(error);
  }
};

export const addUserCard = (post) => async (dispatch, getState) => {
  function onSuccess(success) {
    dispatch({ type: ADD_USER_CARD, payload: success });
    return post;
  }
  function onError(error) {
    dispatch(returnErrors(error.response.data, error.response.status));
    return error;
  }
  try {
    const success = await axios.post("/api/posts", post, tokenConfig(getState));
    return onSuccess(success.data.data);
  } catch (error) {
    return onError(error);
  }
};

export const editUserCard = (post) => async (dispatch, getState) => {
  async function onSuccess(response) {
    getUserCards();
    dispatch({ type: EDIT_USER_CARD, payload: response });
  }
  function onError(error) {
    dispatch(returnErrors(error.response.data, error.response.status));
    return error;
  }
  try {
    dispatch(setUserCardsLoading());
    const response = await axios.patch(
      "/api/posts",
      post,
      tokenConfig(getState)
    );
    return onSuccess(response.data.data);
  } catch (error) {
    return onError(error);
  }
};

export const deleteUserCard = (uuid) => async (dispatch, getState) => {
  function onSuccess() {
    dispatch({ type: DELETE_USER_CARD, payload: uuid });
    return uuid;
  }
  function onError(error) {
    dispatch(returnErrors(error.response.data, error.response.status));
    return error;
  }
  try {
    await axios.delete(`/api/posts/${uuid}`, tokenConfig(getState));
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
