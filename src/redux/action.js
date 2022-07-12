import { auth } from "../utils/firebase";
import {
   LOGIN_FAIL,
   LOGIN_START,
   LOGIN_SUCCESS,
   LOGOUT_FAIL,
   LOGOUT_START,
   LOGOUT_SUCCESS,
   REGISTER_FAIL,
   REGISTER_START,
   REGISTER_SUCCESS,
   SET_USER,
} from "./actionTypes";

const registerStart = () => ({
   type: REGISTER_START,
});

const registerSuccess = (user) => ({
   type: REGISTER_SUCCESS,
   payload: user,
});

const registerError = (error) => ({
   type: REGISTER_FAIL,
   payload: error,
});

const loginStart = () => ({
   type: LOGIN_START,
});

const loginSuccess = (user) => ({
   type: LOGIN_SUCCESS,
   payload: user,
});

const loginError = (error) => ({
   type: LOGIN_FAIL,
   payload: error,
});

const logoutStart = () => ({
   type: LOGOUT_START,
});

const logoutSuccess = () => ({
   type: LOGOUT_SUCCESS,
});

const logoutError = (error) => ({
   type: LOGOUT_FAIL,
   payload: error,
});

export const setUser = (user) => ({
   type: SET_USER,
   payload: user,
});

export const registerInitiate = (email, password) => {
   return function (dispatch) {
      // dispatch(registerStart);
      auth
         .createUserWithEmailAndPassword(email, password)
         .then(({ user }) => {
            dispatch(registerSuccess(user));
         })
         .catch((error) => dispatch(registerError(error.message)));
   };
};

export const loginInitiate = (email, password) => {
   return function (dispatch) {
      // dispatch(loginStart);
      auth
         .signInWithEmailAndPassword(email, password)
         .then(({ user }) => {
            dispatch(loginSuccess(user));
         })
         .catch((error) => dispatch(loginError(error.message)));
   };
};

export const logoutInitiate = () => {
   return function (dispatch) {
      // dispatch(logoutStart())
      auth
         .signOut()
         .then((res) => {
            dispatch(logoutSuccess);
         })
         .catch((error) => dispatch(logoutError(error.message)));
   };
};
