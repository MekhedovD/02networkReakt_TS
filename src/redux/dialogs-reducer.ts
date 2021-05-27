import {v1} from "uuid";

const SEND_MESSAGE = "SEND_MESSAGE";

export type DialogsActionsTypes =
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
  ]
};

const dialogsReducer = (state: InitialStateType = initialState, action: DialogsActionsTypes): InitialStateType => {

  switch (action.type) {
    case SEND_MESSAGE: {
      let newTextBody = action.messageText;
      return {
        ...state,
        messages: [...state.messages, {id: v1(), message: newTextBody}]
      };
    }
    default:
      return state;
  }
}

export const sendMessageBodyAC = (messageText: string) => {
  return {
    type: SEND_MESSAGE,
    messageText
  } as const
}

export default dialogsReducer;