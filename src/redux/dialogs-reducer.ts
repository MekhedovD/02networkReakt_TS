import {v1} from "uuid";

const CHANGE_NEW_MESSAGE_BODY = "CHANGE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

export type DialogsActionsTypes =
	ReturnType<typeof changeNewMessageBodyAC> |
	ReturnType<typeof sendMessageBodyAC>;

export type MessageType = {
	message: string
	id: string
}
export type DialogType = {
	name: string
	id: string
}
type DialogPageType = {
	dialogs: Array<DialogType>
	messages: Array<MessageType>
	newMessageBody: string
}

let initialState = {
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
	],
	newMessageBody: ""
};

const dialogsReducer = (state: DialogPageType = initialState, action: DialogsActionsTypes) => { // ?
	switch (action.type) {
		case CHANGE_NEW_MESSAGE_BODY:
			state.newMessageBody = action.newTextBody;
			return state;
		case SEND_MESSAGE:
			let body = state.newMessageBody;
			state.newMessageBody = "";
			state.messages.push({id: v1(),message: body});
			return state;
		default:
			return state;
	}
}

export const changeNewMessageBodyAC = (newTextBody: string) => {
	return {
		type: CHANGE_NEW_MESSAGE_BODY,
		newTextBody: newTextBody
	} as const
}
export const sendMessageBodyAC = () => {
	return {
		type: SEND_MESSAGE
	} as const
}

export default dialogsReducer;