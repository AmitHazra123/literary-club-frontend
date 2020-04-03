import {
  GET_ALL_POSTS,
  GET_POST,
  UPLOAD_POST,
  UPDATE_POST,
  LIKE_POST,
  DELETE_POST
} from "../actions/types";

const initialState = {
  posts: [],
  post: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case GET_POST:
      return {
        ...state,
        post: action.payload
      };
    case UPLOAD_POST:
      return { ...state, posts: [action.payload].concat(state.posts) };
    case UPDATE_POST:
      return Object.assign({}, state.posts, action.payload);
    case LIKE_POST: {
      let updatedPostsState = state.posts;
      console.log(updatedPostsState);
      let updatedPost = action.payload;
      let updatedPostIndex = updatedPostsState.findIndex(
        post => post._id === updatedPost._id
      );

      if (updatedPostIndex > -1) {
        updatedPostsState.splice(updatedPostIndex, 1, updatedPost);
        return updatedPostsState;
      } else {
        return state;
      }
    }
    case DELETE_POST:
      return { posts: state.posts.filter(post => post._id !== action.payload) };
    default:
      return state;
  }
}
