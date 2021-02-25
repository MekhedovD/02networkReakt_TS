import React, {Dispatch} from "react";
import {addPostAC, changeNewTextAC, PostType} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";
import {Action} from "redux";

type MapStateToPropsType = {
  message: string,
  posts: Array<PostType>
}

type MapDispatchToPropsType = {
  addPost: () => void
  onPostChange: (newText: string) => void
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
  return {
    message: state.profilePage.newPostText,
    posts: state.profilePage.posts,
  }
};


let mapDispatchToProps = (dispatch: Dispatch<Action<string>>): MapDispatchToPropsType => {
  return {
    addPost: () => {
      dispatch(addPostAC())
    },
    onPostChange: (newText: string) => {
      dispatch(changeNewTextAC(newText));
    },
  }
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps) (MyPost)

export default MyPostContainer;
