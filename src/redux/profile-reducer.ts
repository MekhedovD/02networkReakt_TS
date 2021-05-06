import {v1} from "uuid";
import {Dispatch} from "react";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const CHANGE_NEW_TEXT = "CHANGE-NEW-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";

export type ProfileActionsTypes =
  ReturnType<typeof addPostAC> |
  ReturnType<typeof changeNewTextAC> |
  ReturnType<typeof setUserProfile> |
  ReturnType<typeof setStatus>

export type PostType = {
  message: string
  likeCount: number
  id: string
}

export type UserProfileType = {
  userId: number
  // lookingForAJob: boolean
  // lookingForAJobDescription: string
  // fullName: string
  // contacts: {
  //   github: string
  //   vk: string
  //   facebook: string
  //   instagram: string
  //   twitter: string
  //   website: string
  //   youtube: string
  //   mainLink: string
  // }
  photos: {
    small: string
    large: string
  }
  status: string
}

type InitialStateType = {
  posts: Array<PostType>
  newPostText: string
  profile: null | UserProfileType
  status: string
}

let initialState: InitialStateType = {
  posts: [
    {message: "Hello! How are you", likeCount: 5, id: v1()},
    {message: "It's my first post", likeCount: 2, id: v1()},
  ],
  newPostText: "",
  profile: null,
  status: ""
};


//Reducer
const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsTypes): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      const newPost: PostType = {
        id: v1(),
        message: state.newPostText,
        likeCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ""
      };
    }
    case CHANGE_NEW_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }
    case SET_STATUS: {
        return {
          ...state,
          status: action.status
        }
    }
    default:
      return state
  }
}

//ActionCreator
export const addPostAC = () => {
  return {
    type: ADD_POST
  } as const
}
export const setUserProfile = (profile: UserProfileType | null) => {
  return {
    type: SET_USER_PROFILE,
    profile
  } as const
}
export const changeNewTextAC = (newText: string) => {
  return {
    type: CHANGE_NEW_TEXT,
    newText: newText
  } as const
}

export const setStatus = (status: string) => {
  return {
    type: SET_STATUS,
    status: status
  } as const
}

//Thunk
export const getUserProfile = (userId: string) => (dispatch: Dispatch<any>) => {
  usersAPI.getProfile(userId).then(response => {
    dispatch(setUserProfile(response.data));
  })
}

export const getStatus = (userId: string) => (dispatch: Dispatch<any>) => {
  profileAPI.getStatus(userId).then(response => {
      dispatch(setStatus(response.data));
  })
}

export const updateStatus = (status: string) => (dispatch: Dispatch<any>) => {
  profileAPI.updateStatus(status).then(response => {
    if(response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  })
}
export default profileReducer;