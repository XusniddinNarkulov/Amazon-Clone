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

const initialState = {
   loading: false,
   basket: [],
   user: null,
   error: null,
};

export const basketReducer = (state = initialState, { type, payload }) => {
   switch (type) {
      case REGISTER_START:
      case LOGIN_START:
      case LOGOUT_START:
         return {
            ...state,
            loading: true,
         };

      case REGISTER_SUCCESS:
      case LOGIN_SUCCESS:
         return {
            ...state,
            loading: false,
            user: payload,
         };
      case LOGOUT_SUCCESS:
         return {
            ...state,
            user: null,
         };

      case REGISTER_FAIL:
      case LOGIN_FAIL:
      case LOGOUT_FAIL:
         return {
            ...state,
            loading: false,
            error: payload,
         };

      case SET_USER:
         return {
            ...state,
            user: payload,
         };

      default:
         return state;
   }
};
