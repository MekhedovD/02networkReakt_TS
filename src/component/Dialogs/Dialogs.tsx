import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogType, MessageType} from "../../Redax/State";

type DialogsPropsType = {
  dialogs: Array<DialogType>
  messages: Array<MessageType>
}

const Dialogs = (props: DialogsPropsType) => {

  let dialogsElement = props.dialogs.map(d => <DialogItem name={d.name} _id={d.id}/>)
  let messagesElement = props.messages.map(m => <Message message={m.message} _id={m.id}/>)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        { dialogsElement }
      </div>
      <div className={s.messages}>
        { messagesElement }
      </div>
    </div>
  )
}

export default Dialogs;