import { combineReducers } from "redux";
import authReducer from "./authReducer";
import postReducer from "./postRducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  auth: authReducer,
  postReducer,
  errors: errorReducer
});
