import {v1} from "uuid";

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

type InitialStateType = {
	posts: Array<PostType>
	newPostText: string
}

let initialState: InitialStateType = {
	posts: [
		{message: "Hello! How are you", likeCount: 5, id: v1()},
		{message: "It's my first post", likeCount: 2, id: v1()},
	],
	newPostText: ""
};

const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsTypes): InitialStateType => {
	switch (action.type) {
		case ADD_POST:
			const newPost: PostType = {
				id: v1(),
				message: state.newPostText,
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

export const addPostAC = () => {
	return {
		type: ADD_POST
	} as const
}
export const changeNewTextAC = (newText: string) => {
	return {
		type: CHANGE_NEW_TEXT,
		newText: newText
	} as const
}

export default profileReducer;