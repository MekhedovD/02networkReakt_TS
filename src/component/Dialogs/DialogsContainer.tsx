import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  ActionsTypes,
  DialogType,
  MessageType, ReduxStoreType,
} from "../../redux/redux-store";
import {sendMessageBodyAC, changeNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

export type DialogsContainerPropsType = {
  dialogs: Array<DialogType>
  messages: Array<MessageType>
  message: string
  dispatch: (action: ActionsTypes) => void
  store: ReduxStoreType
}

const DialogsContainer = (props: DialogsContainerPropsType) => {

  // let dialogsElement = props.dialogs.map(d => <DialogItem name={d.name} _id={d.id}/>)
  // let messagesElement = props.messages.map(m => <Message message={m.message} _id={m.id}/>)

  let onSendMessageClick = () => {
    props.dispatch(sendMessageBodyAC())
  }

  let onNewMessageChange = (value: string) => {
    props.dispatch(changeNewMessageBodyAC(value));
  }

  return (<Dialogs
      store={props.store}
      dialogs={props.dialogs}
      message={props.message}
      messages={props.messages}
      onNewMessageChange={onNewMessageChange}
      onSendMessageClick={onSendMessageClick}
    />
  )

}

export default DialogsContainer;