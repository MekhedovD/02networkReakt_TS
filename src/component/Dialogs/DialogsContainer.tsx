import React from "react";
import {sendMessageBodyAC, changeNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
// import StoreContext from "../../StoreContex";
import {connect} from "react-redux";

// const DialogsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       { (store) => {
//         let state = store.getState().dialogsPage;
//
//         let onSendMessageClick = () => {
//           store.dispatch(sendMessageBodyAC())
//         }
//
//         let onNewMessageChange = (newTextBody: string) => {
//           store.dispatch(changeNewMessageBodyAC(newTextBody));
//         }
//
//         return <Dialogs
//           dialogs={state.dialogs}
//           message={state.newMessageBody}
//           messages={state.messages}
//           onNewMessageChange={onNewMessageChange}
//           onSendMessageClick={onSendMessageClick}
//         />
//       }
//     }
//     </StoreContext.Consumer>
//   )
// }

let mapStateToProps = (state: any) => {  // TYPE!!!
  return {
    dialogs: state.dialogs,
    message: state.newMessageBody,
    messages: state.messages
  }
};

let mapDispatchToProps = (dispatch : any) => { // TYPE!!!
  return {
    onSendMessageClick: () => {
      dispatch(sendMessageBodyAC())
    },
    onNewMessageChange: (newTextBody: any) => { // TYPE!!!
      dispatch(changeNewMessageBodyAC(newTextBody))
    },
  }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;