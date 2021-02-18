import React from "react";
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContex";
import MyPost from "./MyPost";

const MyPostContainer = () => {

  return (
    <StoreContext.Consumer>
      {
      (store) => {
        let state = store.getState().profilePage;
        let addPost = () => {
          store.dispatch(addPostAC())
        };

        let onPostChange = (value: string) => {
         store.dispatch(changeNewTextAC(value));
        }

        return <MyPost
          message={state.newPostText}
          posts={state.posts}
          addPost={addPost}
          onPostChange={onPostChange}
        />
      }
    }
    </StoreContext.Consumer>
  )
}

export default MyPostContainer;
