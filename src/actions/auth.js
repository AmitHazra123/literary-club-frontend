import axios from "axios";
import jwt_decode from "jwt-decode";

import { api, setAuthToken } from "../utils";
import { SET_CURRENT_USER, SET_ERROR } from "./types";

// actions data
const loginSuccess = decodedToken => {
  return {
    type: SET_CURRENT_USER,
    payload: decodedToken
  };
};

const logoutSuccess = () => {
  return {
    type: SET_CURRENT_USER,
    payload: {}
  };
};

const setErrorSuccess = error => {
  return {
    type: SET_ERROR,
    payload: error
  };
};

// actions
export const login = admin => dispatch => {
  axios
    .post(api.BASE_URL + api.LOGIN, admin)
    .then(res => {
      const { token } = res.data;
      setAuthToken(token);
      localStorage.setItem("jwtToken", token);
      const decoded = jwt_decode(token);
      window.location.href = "/admin";
      return dispatch(loginSuccess(decoded));
    })
    .catch(error => {
      return dispatch(setErrorSuccess(error.response.data));
    });
};

export const logout = () => dispatch => {
  localStorage.removeItem("jwtToken");
  window.location.href = "/";
  return dispatch(logoutSuccess());
};
