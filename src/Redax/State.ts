import {v1} from "uuid";

const ADD_POST = "ADD-POST";
const CHANGE_NEW_TEXT = "CHANGE-NEW-TEXT";

export type PostType = {
  message: string
  likeCount: number
  id: string
}
export type MessageType = {
  message: string
  id: string
}
export type DialogType = {
  name: string
  id: string
}
export type ProfilePageType = {
  posts: Array<PostType>
  newPostText: string
}
type DialogPageType = {
  dialogs: Array<DialogType>
  messages: Array<MessageType>
}
type SidebarType = {}

export type RootStateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogPageType
  sidebar: SidebarType
}

export type StoreType = {
  _state: RootStateType
  _onChange: () => void
  subscribe: (callback: () => void) => void
  getState: () => RootStateType
  dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes =  ReturnType<typeof addPostAC> | ReturnType<typeof changeNewTextAC>;

export const addPostAC = (postMessage: string) => {
  return {
    type: ADD_POST,
    postMessage: postMessage
  } as const
}

export const changeNewTextAC = (newText: string) => {
  return {
    type: CHANGE_NEW_TEXT,
    newText: newText
  } as const
}

const store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        {message: "Hello! How are you", likeCount: 5, id: v1()},
        {message: "It's my first post", likeCount: 2, id: v1()},
      ],
      newPostText: ""
    },
    dialogsPage: {
      dialogs: [
        {id: v1(), name: "Dima"},
        {id: v1(), name: "Sasha"},
        {id: v1(), name: "Valera"},
        {id: v1(), name: "Vika"},
        {id: v1(), name: "Olya"},
        {id: v1(), name: "Ulya"}
      ],
      messages: [
        {message: "Hi", id: v1()},
        {message: "How are you", id: v1()},
        {message: "YO!!!", id: v1()}
      ]
    },
    sidebar: {}
  },
  _onChange() {
    console.log("state change")
  },
  subscribe(callback) {
    this._onChange = callback
  },
  getState() {
    return this._state
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      const newPost: PostType = {
        id: v1(),
        message: action.postMessage,
        likeCount: 0
      }
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._onChange();
    } else if (action.type === CHANGE_NEW_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._onChange()
    }
  }
}

export default store;
