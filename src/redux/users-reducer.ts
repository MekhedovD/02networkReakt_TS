// import {v1} from "uuid";
// import axios from "axios";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

export type UsersActionsTypes =
  ReturnType<typeof followAC> |
  ReturnType<typeof unfollowAC> |
  ReturnType<typeof setUsersAC>

// export type UsersType = { не могу прочитать сообщения(
//   followed: boolean
//   fullName: string
//   status: string
//   id: string
//   photoUrl: string
//   location: {
//     city: string
//     country: string
//   }
// }

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
}

let initialState: InitialStateType = {
  users: [
    // {
    //   followed: false,
    //   fullName: "Dmitry",
    //   status: "I am boss",
    //   location: {city: "Minsk", country: "Belarus"},
    //   photoUrl: "https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg",
    //   id: v1()
    // },
    // {
    //   followed: false,
    //   fullName: "Andry",
    //   status: "I am boss too",
    //   location: {city: "Minsk", country: "Belarus"},
    //   photoUrl: "https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg",
    //   id: v1()
    // },
    // {
    //   followed: false,
    //   fullName: "Joanna",
    //   status: "I am boss too",
    //   location: {city: "Minsk", country: "Belarus"},
    //   photoUrl: "https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg",
    //   id: v1()
    // },
  ]
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
      return {...state, users: [...state.users, ...action.users]}
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

export default usersReducer;