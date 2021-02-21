import React from "react";
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
// import StoreContext from "../../../StoreContex";
import MyPost from "./MyPost";
import {connect} from "react-redux";

// const MyPostContainer = () => {
//
//   return (
//     <StoreContext.Consumer>
//       {
//       (store) => {
//         let state = store.getState().profilePage;
//         let addPost = () => {
//           store.dispatch(addPostAC())
//         };
//
//         let onPostChange = (value: string) => {
//          store.dispatch(changeNewTextAC(value));
//         }
//
//         return <MyPost
//           message={state.newPostText}
//           posts={state.posts}
//           addPost={addPost}
//           onPostChange={onPostChange}
//         />
//       }
//     }
//     </StoreContext.Consumer>
//   )
// }

let mapStateToProps = (state: any) => { // TYPE!!!
  return {
    message: state.newPostText,
    posts: state.posts
  }
};

let mapDispatchToProps = (dispatch: any) => { // TYPE!!!
  return {
    addPost: () => {
      dispatch(addPostAC())
    },
    onPostChange: (value: any) => { // TYPE!!!
      dispatch(changeNewTextAC(value));
    }
  }
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps) (MyPost)

export default MyPostContainer;
