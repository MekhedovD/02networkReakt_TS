import {combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {StoreType} from "./store";
// import {StoreType} from "./store";
//
// export type PostType = {
//   message: string
//   likeCount: number
//   id: string
// }
// export type MessageType = {
//   message: string
//   id: string
// }
// export type DialogType = {
//   name: string
//   id: string
// }
// export type ProfilePageType = {
//   posts: Array<PostType>
//   newPostText: string
// }
// export type DialogPageType = {
//   dialogs: Array<DialogType>
//   messages: Array<MessageType>
//   newMessageBody: string
// }
// export type SidebarType = {}


//
// export type ActionsTypes =
//   ReturnType<typeof addPostAC> |
//   ReturnType<typeof changeNewTextAC> |
//   ReturnType<typeof changeNewMessageBodyAC> |
//   ReturnType<typeof sendMessageBodyAC>;

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer
});

export type RootStateType = ReturnType<typeof reducers>

let store: StoreType = createStore(reducers)
export type ReduxStoreType = typeof store // новый тип (redux)

export default store;