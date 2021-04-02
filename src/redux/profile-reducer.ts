import {v1} from "uuid";

const ADD_POST = "ADD-POST";
const CHANGE_NEW_TEXT = "CHANGE-NEW-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";

export type ProfileActionsTypes =
  ReturnType<typeof addPostAC> |
  ReturnType<typeof changeNewTextAC> |
  ReturnType<typeof setUserProfile>

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
  // status: string
// }
}

type InitialStateType = {
  posts: Array<PostType>
  newPostText: string
  // т.е. профайд это не массив, как у тебя было написано
  // а он может быть либо null либо UserProfileType
  profile: null | UserProfileType
  // profile: null
}

let initialState: InitialStateType = {
  posts: [
    {message: "Hello! How are you", likeCount: 5, id: v1()},
    {message: "It's my first post", likeCount: 2, id: v1()},
  ],
  newPostText: "",
  // дело в типизаци профайла
  profile: null
  // profile: null //?????
};



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
    // все, проблема решена )))
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }
    default:
      return state
  }
}

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

export default profileReducer;