import {addPostAC, changeNewTextAC} from "./profile-reducer";
import {changeNewMessageBodyAC, sendMessageBodyAC} from "./dialogs-reducer";

// всё нужно, ничего страшного)
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
 type ProfilePageType = {
  posts: Array<PostType>
  newPostText: string
}
type DialogPageType = {
  dialogs: Array<DialogType>
  messages: Array<MessageType>
  newMessageBody: string
}
export type SidebarType = {}

export type RootStateType = { // нужн
  profilePage: ProfilePageType
  dialogsPage: DialogPageType
  sidebar: SidebarType
}

// export type StoreType = {
//   _state: RootStateType
//   _onChange: () => void
//   subscribe: (callback: () => void) => void
//   getState: () => RootStateType
//   dispatch: (action: ActionsTypes) => void
// }

export type ActionsTypes = // но типы нужны
  ReturnType<typeof addPostAC> |
  ReturnType<typeof changeNewTextAC> |
  ReturnType<typeof changeNewMessageBodyAC> |
  ReturnType<typeof sendMessageBodyAC>;

// просто игнорируем, но память)
// const store: StoreType = { // старый стэйт больше не нужен
//   _state: {
//     profilePage: {
//       posts: [
//         {message: "Hello! How are you", likeCount: 5, id: v1()},
//         {message: "It's my first post", likeCount: 2, id: v1()},
//       ],
//       newPostText: ""
//     },
//     dialogsPage: {
//       dialogs: [
//         {id: v1(), name: "Dima"},
//         {id: v1(), name: "Sasha"},
//         {id: v1(), name: "Valera"},
//         {id: v1(), name: "Vika"},
//         {id: v1(), name: "Olya"},
//         {id: v1(), name: "Ulya"}
//       ],
//       messages: [
//         {message: "Hi", id: v1()},
//         {message: "How are you", id: v1()},
//         {message: "YO!!!", id: v1()}
//       ],
//       newMessageBody: ""
//     },
//     sidebar: {}
//   },
//   _onChange() {
//     console.log("state change")
//   },
//   subscribe(callback) {
//     this._onChange = callback
//   },
//   getState() {
//     return this._state
//   },
//   dispatch(action: ActionsTypes) {
//
//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//     this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//
//
//     this._onChange();
//   }
// }

// export default store;
