import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  getCurrentUserError,
  getCurrentUserSuccess,
  loginError,
  loginSuccess,
  logoutError,
  logoutSuccess,
  registerError,
  registerSuccess,
} from "../actions/authActions";

const innitialUserState = { user: null, email: null };

const user = createReducer(innitialUserState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
  [logoutSuccess]: () => innitialUserState,
});

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [getCurrentUserError]: (_, { payload }) => payload,
  [logoutError]: (_, { payload }) => payload,
});

const authReducer = combineReducers({
  user,
  token,
  error,
});

export default authReducer;
