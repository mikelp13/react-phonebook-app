import axios from "axios";
import {
  getCurrentUserError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  loginError,
  loginSuccess,
  logoutError,
  logoutRequest,
  logoutSuccess,
  registerError,
  registerRequest,
  registerSuccess,
} from "../actions/authActions";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = (credentials) => (dispatch) => {
  dispatch(registerRequest());

  axios
    .post("/users/signup", credentials)
    .then(({data}) => {
      token.set(data.token);
      dispatch(registerSuccess(data));
    })
    .catch((error) => dispatch(registerError(error)));
};

const logIn = (credentials) => (dispatch) => {
  dispatch(registerRequest());

  axios
    .post("/users/login", credentials)
    .then(({data}) => {
      token.set(data.token);
      dispatch(loginSuccess(data));
    })
    .catch((error) => dispatch(loginError(error)));
};

const logOut = () => (dispatch) => {
  dispatch(logoutRequest());

  axios
    .post("/users/logout")
    .then(() => {
      token.unset();
      dispatch(logoutSuccess());
    })
    .catch((error) => dispatch(logoutError(error)));
};

const getCurrentUser = () => (dispatch, getState) => {
 
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) return;

  token.set(persistedToken);
  dispatch(getCurrentUserRequest());

  axios
    .get("/users/current")
    .then(({data}) => {
      dispatch(getCurrentUserSuccess(data));
    })
    .catch((error) => dispatch(getCurrentUserError(error)));
};

export { register, logIn, logOut, getCurrentUser };
