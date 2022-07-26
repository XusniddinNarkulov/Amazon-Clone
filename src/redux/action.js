import { auth } from "../utils/firebase";
import {
   ADD_TO_BASKET,
   LOGIN_FAIL,
   LOGIN_START,
   LOGIN_SUCCESS,
   LOGOUT_FAIL,
   LOGOUT_START,
   LOGOUT_SUCCESS,
   REGISTER_FAIL,
   REGISTER_START,
   REGISTER_SUCCESS,
   REMOVE_FROM_BASKET,
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

export const addToBasket = (item) => ({
   type: ADD_TO_BASKET,
   payload: item,
});

export const removeFromBasket = (id) => ({
   type: REMOVE_FROM_BASKET,
   payload: { id },
});
