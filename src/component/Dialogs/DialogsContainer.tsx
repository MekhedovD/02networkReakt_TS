import React from "react";
import {
  sendMessageBodyAC,
  changeNewMessageBodyAC,
  DialogPageType,
  // InitialStateType,
  DialogType, MessageType
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
// import StoreContext from "../../StoreContex";
import {connect} from "react-redux";

type MapStateToPropsType ={
  dialogs: Array<DialogType>
  message: string
  messages: Array<MessageType>
}

// type MapStateToPropsType ={
//   dialogs: Array<DialogType>,
//   message: any,
//   messages: any
// }

type MapDispatchToPropsType = {
  onSendMessageClick: () => void
  onNewMessageChange: (newTextBody: string) => void
}

let mapStateToProps = (state: DialogPageType): MapStateToPropsType=> {  // TYPE!!!
  return {
    dialogs: state.dialogs,
    message: state.newMessageBody,
    messages: state.messages
  }
};

let mapDispatchToProps = (dispatch : any): MapDispatchToPropsType => { // TYPE!!!
  return {
    onSendMessageClick: () => {
      dispatch(sendMessageBodyAC())
    },
    onNewMessageChange: (newTextBody: string) => { // TYPE!!!
      dispatch(changeNewMessageBodyAC(newTextBody))
    },
  }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;