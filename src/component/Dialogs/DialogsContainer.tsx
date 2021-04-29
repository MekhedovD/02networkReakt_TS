import React, {Dispatch} from "react";
import {sendMessageBodyAC,changeNewMessageBodyAC,DialogType, MessageType} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import { RootStateType } from "../../redux/redux-store";
import { Action } from "redux";

type MapStateToPropsType ={
  dialogs: Array<DialogType>
  message: string
  messages: Array<MessageType>
  isAuth: boolean
}

type MapDispatchToPropsType = {
  onSendMessageClick: () => void
  onNewMessageChange: (newTextBody: string) => void
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType=> {
  return {
    dialogs: state.dialogsPage.dialogs,
    message: state.dialogsPage.newMessageBody,
    messages: state.dialogsPage.messages,
    isAuth: state.auth.isAuth
  }
};

let mapDispatchToProps = (dispatch: Dispatch<Action<string>>): MapDispatchToPropsType => {
  return {
    onSendMessageClick: () => {
      dispatch(sendMessageBodyAC())
    },
    onNewMessageChange: (newTextBody: string) => {
      dispatch(changeNewMessageBodyAC(newTextBody))
    },
  }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;