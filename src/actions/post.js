import axios from "axios";

import {
  GET_ALL_POSTS,
  GET_POST,
  UPLOAD_POST,
  UPDATE_POST,
  DELETE_POST,
  SET_ERROR,
  LIKE_POST
} from "./types";
import { api } from "../utils";

// actions data
const getAllPostsSuccess = posts => {
  return {
    type: GET_ALL_POSTS,
    payload: posts
  };
};

const getPostSuccess = post => {
  return {
    type: GET_POST,
    payload: post
  };
};

const uploadPostSuccess = newPost => {
  return {
    type: UPLOAD_POST,
    payload: newPost
  };
};

const updatedPostSuccess = post => {
  return {
    type: UPDATE_POST,
    payload: post
  };
};

const deletedPostSuccess = postId => {
  return {
    type: DELETE_POST,
    payload: postId
  };
};

const likePostSuccess = post => {
  return {
    type: LIKE_POST,
    payload: post
  };
};

const setErrorSuccess = error => {
  return {
    type: SET_ERROR,
    payload: error
  };
};

// actions
export const getAllPosts = () => dispath => {
  axios
    .get(api.BASE_URL + api.GET_POSTS)
    .then(res => {
      return dispath(getAllPostsSuccess(res.data));
    })
    .catch(error => {
      return dispath(setErrorSuccess(error.response.data));
    });
};

export const getPost = postId => dispatch => {
  axios
    .get(api.BASE_URL + api.GET_POST + postId)
    .then(res => {
      return dispatch(getPostSuccess(res.data));
    })
    .catch(error => {
      return dispatch(setErrorSuccess(error.response.data));
    });
};

export const uploadPost = post => dispatch => {
  // upload
  axios
    .post(api.BASE_URL + api.UPLOAD_POST, post)
    .then(res => {
      return dispatch(uploadPostSuccess(res.data));
    })
    .catch(error => {
      return dispatch(setErrorSuccess(error.response.data));
    });
};

export const updatePost = (postId, post) => dispatch => {
  axios
    .put(api.BASE_URL + api.UPDATE_POST + postId, post)
    .then(res => {
      return dispatch(updatedPostSuccess(res.data));
    })
    .catch(error => {
      return dispatch(setErrorSuccess(error.response.data));
    });
};

export const likePost = (postId, factor) => dispatch => {
  axios
    .put(api.BASE_URL + api.LIKE_POST + postId, factor)
    .then(res => {
      return dispatch(likePostSuccess(res.data));
    })
    .catch(error => {
      return console.log(error);
    });
};

export const deletePost = postId => dispatch => {
  axios
    .delete(api.BASE_URL + api.DELETE_POST + postId)
    .then(res => {
      return dispatch(deletedPostSuccess(postId));
    })
    .catch(error => {
      return dispatch(setErrorSuccess(error.response.data));
    });
};
