// import {v1} from "uuid";
// import axios from "axios";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

export type UsersActionsTypes =
  ReturnType<typeof followAC> |
  ReturnType<typeof unfollowAC> |
  ReturnType<typeof setUsersAC> |
  ReturnType<typeof setCurrentPageAC> |
  ReturnType<typeof setUsersTotalCountAC>

export type UsersType = {
  name: string
  id: number
  uniqueUrlName: null
  photos: {
    small: string | null
    large: string | null
  }
  status: null
  followed: boolean
}

type InitialStateType = {
  users: Array<UsersType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
}

let initialState: InitialStateType = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
};

const usersReducer = (state: InitialStateType = initialState, action: UsersActionsTypes): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        })
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })
      }

    case SET_USERS: {
      return {...state, users: action.users}
    }

    case SET_CURRENT_PAGE: {
      return {...state, currentPage: action.currentPage}
    }

    case SET_TOTAL_USERS_COUNT: {
      return {...state, totalUsersCount: action.totalCount}
    }

    default:
      return state
  }
}

export const followAC = (userId: number) => { //!!!
  return {
    type: FOLLOW,
    userId
  } as const
}

export const unfollowAC = (userId: number) => { //!!!
  return {
    type: UNFOLLOW,
    userId
  } as const
}

export const setUsersAC = (users: Array<UsersType>) => {
  return {
    type: SET_USERS,
    users
  } as const
}

export const setCurrentPageAC = (currentPage: number) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage
  } as const
}

  export const setUsersTotalCountAC = (totalCount: number) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalCount: totalCount
  } as const
}

export default usersReducer;