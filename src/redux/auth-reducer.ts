import {Dispatch} from "react";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET-USER-DATA";

export type AuthActionsTypes =
  ReturnType<typeof setAuthUserData>

export type AuthStateType = {
  id: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
}

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
};


//Reducer
export const authReducer = (state: AuthStateType = initialState, action: AuthActionsTypes): AuthStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

//ActionCreator
export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
  return {
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
  } as const
}

//Thunk
export const getAuthUserData = () => (dispatch: Dispatch<any>) => {
  return authAPI.me()
    .then(response => {
      if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<any>) => {
  authAPI.logIn(email, password, rememberMe)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
      } else {
        let message = response.data.messages !== 0 ? response.data.messages[0] : "some error";
       dispatch(stopSubmit("login", {_error: message}));
      }
    })
}

export const logout = () => (dispatch: Dispatch<any>) => {
  authAPI.logOut()
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    })
}

export default authReducer;