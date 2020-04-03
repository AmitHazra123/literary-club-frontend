import axios from "axios";

export const api = {
  BASE_URL: "http://localhost:4040",
  LOGIN: "/auth",
  GET_POSTS: "/posts",
  GET_POST: "/posts/",
  UPLOAD_POST: "/posts/",
  UPDATE_POST: "/posts/edit/",
  DELETE_POST: "/posts/",
  LIKE_POST: "/posts/like/"
};

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};
