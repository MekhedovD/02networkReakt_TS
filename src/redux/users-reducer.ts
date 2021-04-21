import {usersAPI} from "../api/api";
import {Dispatch} from "react";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

export type UsersActionsTypes =
  ReturnType<typeof followSuccess> |
  ReturnType<typeof unfollowSuccess> |
  ReturnType<typeof setUsers> |
  ReturnType<typeof setCurrentPage> |
  ReturnType<typeof setTotalUsersCount> |
  ReturnType<typeof toggleIsLoading> |
  ReturnType<typeof toggleFollowingProgress>

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
  isLoading: boolean
  followingInProgress: Array<number>
}

let initialState: InitialStateType = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isLoading: true,
  followingInProgress: []
};

//Reducer
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

    case TOGGLE_IS_LOADING: {
      return {...state, isLoading: action.isLoading}
    }

    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {...state,
        followingInProgress: action.isLoading
          ? [...state.followingInProgress, action.userId]
          : [...state.followingInProgress.filter(id => id !== action.userId)]}
    }

    default:
      return state
  }
}

// ActionCreator
export const followSuccess = (userId: number) => {
  return {
    type: FOLLOW,
    userId
  } as const
}

export const unfollowSuccess = (userId: number) => {
  return {
    type: UNFOLLOW,
    userId
  } as const
}

export const setUsers = (users: Array<UsersType>) => {
  return {
    type: SET_USERS,
    users
  } as const
}

export const setCurrentPage = (currentPage: number) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage
  } as const
}

export const setTotalUsersCount = (totalCount: number) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalCount: totalCount
  } as const
}

export const toggleIsLoading = (isLoading: boolean) => {
  return {
    type: TOGGLE_IS_LOADING,
    isLoading
  } as const
}

export const toggleFollowingProgress = (isLoading: boolean, userId: number) => {
  return {
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isLoading,
    userId
  } as const
}

// thunk
export const getUsers = (currentPage: number, pageSize: number) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(toggleIsLoading(true));
    usersAPI.getUsers(currentPage, pageSize)
      .then(data => {
        dispatch(toggleIsLoading(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
      })
  }
};

export const follow = (userId: number) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.follow(userId)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(followSuccess(userId));
        }
        dispatch(toggleFollowingProgress(false, userId))
      })
  }
};

export const unfollow = (userId: number) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.follow(userId)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(unfollowSuccess(userId));
        }
        dispatch(toggleFollowingProgress(false, userId))
      })
  }
};

export default usersReducer;