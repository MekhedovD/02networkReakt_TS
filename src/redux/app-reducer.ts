import {Dispatch} from "react";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS";

// export type AuthActionsTypes =
//   ReturnType<typeof setAuthUserData>

export type InitStateType = {
  initialized: boolean
}

let initialState = {
  initialized: false
};


//Reducer
export const appReducer = (state: InitStateType = initialState, action: any): InitStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }
    default:
      return state
  }
}

//ActionCreator
export const initializedSuccess = () => {
  return {
    type: INITIALIZED_SUCCESS
  } as const
}

//Thunk
export const initializeApp = () => (dispatch: Dispatch<any>) => {
  let promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess())
  })
}

export default appReducer;