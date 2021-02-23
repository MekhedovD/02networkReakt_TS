import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogType, MessageType} from "../../redux/dialogs-reducer";


export type DialogsPropsType = {
  dialogs: Array<DialogType>
  messages: Array<MessageType>
  message: string
  onNewMessageChange: (value: string) => void
  onSendMessageClick: () => void
}

const Dialogs = (props: DialogsPropsType) => {
  let dialogsElement = props.dialogs.map(d => <DialogItem name={d.name} _id={d.id}/>)
  let messagesElement = props.messages.map(m => <Message message={m.message} _id={m.id}/>)

  let onSendMessageClick = () => {
    props.onSendMessageClick()
  }

  let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.onNewMessageChange(e.currentTarget.value)
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