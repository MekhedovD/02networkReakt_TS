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

export type InitialStateType = {
	dialogs: Array<DialogType>
	messages: Array<MessageType>
	newMessageBody: string
}

let initialState: InitialStateType = {
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

const dialogsReducer = (state: InitialStateType = initialState, action: DialogsActionsTypes): InitialStateType => {
	switch (action.type) {
		case CHANGE_NEW_MESSAGE_BODY:{
			let stateCopy = {...state};
			stateCopy.messages = [...state.messages];
			stateCopy.newMessageBody = action.newTextBody;
			return stateCopy;
		}
		case SEND_MESSAGE:{
			let stateCopy = {...state};
			let newTextBody = stateCopy.newMessageBody;
			stateCopy.newMessageBody = "";
			stateCopy.messages = [...state.messages];
			stateCopy.messages.push({id: v1(),message: newTextBody});
			return stateCopy;
		}
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