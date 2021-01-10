import {v1} from "uuid";
import {renderTree} from "../render";

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

let state: RootStateType = {
  profilePage: {
    posts:  [
      {message:"Hello! How are you", likeCount: 5, id: v1()},
      {message:"It's my first post", likeCount: 2, id: v1()},
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
       {message:"Hi", id: v1()},
       {message:"How are you", id: v1()},
       {message:"YO!!!", id: v1()}
     ]
   },
  sidebar: {}
}

export let addPost = (postMessage: string) => {
  const newPost: PostType = {
    id: v1(),
    message: postMessage,
    likeCount: 0
  }
  state.profilePage.posts.push(newPost);
  renderTree(state);
}

export const changeNewText = (newText: string) => {
  state.profilePage.newPostText = newText;
  renderTree(state)
}

export default state;