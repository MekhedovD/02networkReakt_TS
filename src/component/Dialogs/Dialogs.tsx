import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  ActionsTypes,
  changeNewMessageBodyAC,
  DialogType,
  MessageType, sendMessageBodyAC
} from "../../Redax/State";

export type DialogsPropsType = {
  dialogs: Array<DialogType>
  messages: Array<MessageType>
  message: string
  dispatch: (action: ActionsTypes) => void
}

const Dialogs = (props: DialogsPropsType) => {

  let dialogsElement = props.dialogs.map(d => <DialogItem name={d.name} _id={d.id}/>)
  let messagesElement = props.messages.map(m => <Message message={m.message} _id={m.id}/>)

  let onSendMessageClick = () => {
    props.dispatch(sendMessageBodyAC(props.message))
  }

  let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(changeNewMessageBodyAC(e.currentTarget.value));
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        { dialogsElement }
      </div>
      <div className={s.messages}>
        <div>{ messagesElement }</div>
        <div>
          <div><textarea
            value={ props.message }
            onChange={onNewMessageChange}
            placeholder="Enter your message"
          />
          </div>
          <div><button onClick={onSendMessageClick}>Send</button></div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;