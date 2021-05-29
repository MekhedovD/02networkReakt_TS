import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogType, MessageType} from "../../redux/dialogs-reducer";
import { Redirect } from "react-router-dom";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormControlTextarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/Validators";


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
        <div>{ messagesElement }</div>

        <AddMessageFormRedux onSubmit={addNewMessage} />

      </div>
    </div>
  )
}

const maxLength50 = maxLengthCreator(50);

const AddMessageForm: React.FC<InjectedFormProps<MessageFormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={FormControlTextarea}
          validate={[required, maxLength50]}
          name="messageText"
          placeholder="Enter your message" />
      </div>
      <div><button>Send</button></div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm<MessageFormDataType>({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;