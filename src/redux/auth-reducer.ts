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

export const setAuthUserData = (id: number | null, email: string | null, login: string | null) => {
  return {
    type: SET_USER_DATA,
    data: {id, email, login}
  } as const
}

export default authReducer;