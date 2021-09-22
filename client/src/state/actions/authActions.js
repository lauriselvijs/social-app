import axios from "axios";
import { returnErrors } from "./errorActions";

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "./types";

// Check token and load user
export const loadUser = () => async (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING });

  function onSuccess(success) {
    dispatch({ type: USER_LOADED, payload: success });
    return success;
  }
  function onError() {
    dispatch({ type: AUTH_ERROR });
  }
  try {
    const success = await axios.get("/api/users/user", tokenConfig(getState));
    return onSuccess(success.data);
  } catch (error) {
    console.log(error);
    dispatch(returnErrors(error.response.data, error.response.status));
    return onError();
  }
};

// Register user
export const register =
  ({ name, email, password }) =>
  async (dispatch) => {
    // Headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Request body
    const body = JSON.stringify({ name, email, password });

    function onSuccess(res) {
      dispatch({ type: REGISTER_SUCCESS, payload: res });
      return res;
    }
    function onError(error) {
      dispatch(
        returnErrors(
          error.response.data,
          error.response.status,
          "REGISTER_FAIL"
        )
      );
      dispatch({ type: REGISTER_FAIL });
      return error;
    }

    try {
      const res = await axios.post("/api/users", body, config);
      return onSuccess(res.data);
    } catch (error) {
      return onError(error);
    }
  };

// Login User
export const login =
  ({ email, password }) =>
  async (dispatch) => {
    // Headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Request body
    const body = JSON.stringify({ email, password });

    function onSuccess(res) {
      dispatch({ type: LOGIN_SUCCESS, payload: res });
      return res;
    }
    function onError(error) {
      dispatch(
        returnErrors(error.response.data, error.response.status, "LOGIN_FAIL")
      );
      dispatch({ type: LOGIN_FAIL });
      return error;
    }

    try {
      const res = await axios.post("/api/auth", body, config);
      return onSuccess(res.data);
    } catch (error) {
      return onError(error);
    }
  };

// Logout user
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT_SUCCESS });
};

// Setup config/headers and token
export const tokenConfig = (getState) => {
  // Get token from local storage
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  // If token, add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
