import React from "react";
import {addPostAC, changeNewTextAC, PostType, ProfilePageType} from "../../../redux/profile-reducer";
// import StoreContext from "../../../StoreContex";
import MyPost from "./MyPost";
import {connect} from "react-redux";

type MapStateToPropsType = {
  message: string,
  posts: Array<PostType>
}

type MapDispatchToPropsType = {
  addPost: () => void
  onPostChange: (newText: string) => void
}

let mapStateToProps = (state: ProfilePageType): MapStateToPropsType => { // TYPE!!!
  return {
    message: state.newPostText,
    posts: state.posts,
  }
};

let mapDispatchToProps = (dispatch: any): MapDispatchToPropsType => { // TYPE!!!
  return {
    addPost: () => {
      dispatch(addPostAC())
    },
    onPostChange: (newText: string) => { // TYPE!!!
      dispatch(changeNewTextAC(newText));
    },
  }
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps) (MyPost)

export default MyPostContainer;
