import {v1} from "uuid";
import {ActionsTypes, RootStateType} from "./store";
// import {PostType} from "./State";

const ADD_POST = "ADD-POST";
const CHANGE_NEW_TEXT = "CHANGE-NEW-TEXT";

export type ProfileActionsTypes =
	ReturnType<typeof addPostAC> |
	ReturnType<typeof changeNewTextAC>

export type PostType = {
	message: string
	likeCount: number
	id: string
}
export type ProfilePageType = {
	posts: Array<PostType>
	newPostText: string
}

let initialState = {
	posts: [
		{message: "Hello! How are you", likeCount: 5, id: v1()},
		{message: "It's my first post", likeCount: 2, id: v1()},
	],
	newPostText: ""
};

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
	switch (action.type) {
		case ADD_POST:
			const newPost: PostType = {
				id: v1(),
				message: action.postMessage,
				likeCount: 0
			}
			state.posts.push(newPost);
			state.newPostText = "";
			return state;
		case  CHANGE_NEW_TEXT:
			state.newPostText = action.newText;
			return state;
		default:
			return state
	}
}

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

export default profileReducer;