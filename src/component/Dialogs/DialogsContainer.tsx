import React from "react";
import {sendMessageBodyAC, changeNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContex";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      { (store) => {
        let state = store.getState().dialogsPage;

        let onSendMessageClick = () => {
          store.dispatch(sendMessageBodyAC())
        }

        let onNewMessageChange = (value: string) => {
          store.dispatch(changeNewMessageBodyAC(value));
        }

        return <Dialogs
          dialogs={state.dialogs}
          message={state.newMessageBody}
          messages={state.messages}
          onNewMessageChange={onNewMessageChange}
          onSendMessageClick={onSendMessageClick}
        />
      }
    }
    </StoreContext.Consumer>
  )
}

export default DialogsContainer;