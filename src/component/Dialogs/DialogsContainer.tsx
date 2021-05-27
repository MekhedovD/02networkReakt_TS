import React, {Dispatch} from "react";
import {sendMessageBodyAC,DialogType, MessageType} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import { RootStateType } from "../../redux/redux-store";
import { Action, compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

type MapStateToPropsType ={
  dialogs: Array<DialogType>
  messages: Array<MessageType>
}

type MapDispatchToPropsType = {
  onSendMessageClick: (messageText: string) => void
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType=> {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
  }
};

let mapDispatchToProps = (dispatch: Dispatch<Action<string>>): MapDispatchToPropsType => {
  return {
    onSendMessageClick: (messageText) => {
      dispatch(sendMessageBodyAC(messageText))
    }
  }
};

export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
