import {Dispatch} from "react";
import {authAPI} from "../api/api";

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
        ...action.data,
        isAuth: true
      }
    default:
      return state
  }
}

//ActionCreator
export const setAuthUserData = (id: number | null, email: string | null, login: string | null) => {
  return {
    type: SET_USER_DATA,
    data: {id, email, login}
  } as const
}

//Thunk
export const getAuthUserData = () => (dispatch: Dispatch<any>) => {
  authAPI.me()
    .then(response => {
      if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login,));
      }
    })
}

export default authReducer;