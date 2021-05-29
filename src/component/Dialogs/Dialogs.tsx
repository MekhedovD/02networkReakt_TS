import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogType, MessageType} from "../../redux/dialogs-reducer";
import {AddMessageFormRedux} from "./AddMessageForm/AddMessageForm";


export type DialogsPropsType = {
  dialogs: Array<DialogType>
  messages: Array<MessageType>
  onSendMessageClick: (messageText: string) => void
  // isAuth: boolean
}

export type MessageFormDataType = {
  messageText: string
}

const Dialogs = (props: DialogsPropsType) => {
  let dialogsElement = props.dialogs.map(d => <DialogItem name={d.name} _id={d.id} key={d.id}/>)
  let messagesElement = props.messages.map(m => <Message message={m.message} _id={m.id} key={m.id}/>)

  // if (!props.isAuth) return <Redirect to="/login" />

  const addNewMessage = (data: MessageFormDataType) => {
    props.onSendMessageClick(data.messageText);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        { dialogsElement }
      </div>
      <div className={s.messages}>
        <div>{messagesElement}</div>

        <AddMessageFormRedux onSubmit={addNewMessage}/>

      </div>
    </div>
  )
}

export default Dialogs;