import React from "react";
import {NavLink} from "react-router-dom";
import s from "../Dialogs.module.css"
import {v1} from "uuid";

type  MessageType = {
  message: string
  _id: string
}

const Message = (props: MessageType) => {
  return (
    <div className={s.message}>{props.message}</div>
  )
}

export default Message;
