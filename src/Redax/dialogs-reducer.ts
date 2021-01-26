import {v1} from "uuid";
import {ActionsTypes} from "./State";

const CHANGE_NEW_MESSAGE_BODY = "CHANGE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

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

export type DialogsActionsTypes =
	ReturnType<typeof changeNewMessageBodyAC> |
	ReturnType<typeof sendMessageBodyAC>;

const dialogsReducer = (state: DialogPageType, action: ActionsTypes) => {

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
export const sendMessageBodyAC = (sendTextBody: string) => {
	return {
		type: SEND_MESSAGE,
		sendTextBody: sendTextBody
	} as const
}

export default dialogsReducer;