import React, {Dispatch} from "react";
import {sendMessageBodyAC,changeNewMessageBodyAC,DialogType, MessageType} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import { RootStateType } from "../../redux/redux-store";
import { Action, compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

type MapStateToPropsType ={
  dialogs: Array<DialogType>
  message: string
  messages: Array<MessageType>
}

type MapDispatchToPropsType = {
  onSendMessageClick: (messageText: string) => void
  onNewMessageChange: (newTextBody: string) => void
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType=> {
  return {
    dialogs: state.dialogsPage.dialogs,
    message: state.dialogsPage.newMessageBody,
    messages: state.dialogsPage.messages,
  }
};

let mapDispatchToProps = (dispatch: Dispatch<Action<string>>): MapDispatchToPropsType => {
  return {
    onSendMessageClick: (messageText) => {
      dispatch(sendMessageBodyAC(messageText))
    },
    onNewMessageChange: (newTextBody: string) => {
      dispatch(changeNewMessageBodyAC(newTextBody))
    },
  }
};

export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
