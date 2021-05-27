import React, {Dispatch} from "react";
import {addPostAC, PostType} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";
import {Action} from "redux";

type MapStateToPropsType = {
  posts: Array<PostType>
}

type MapDispatchToPropsType = {
  addPost: (newPostText: string) => void
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
  return {
    posts: state.profilePage.posts,
  }
};


let mapDispatchToProps = (dispatch: Dispatch<Action<string>>): MapDispatchToPropsType => {
  return {
    addPost: (newPostText: string) => {
      dispatch(addPostAC(newPostText))
    }
  }
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps) (MyPost)

export default MyPostContainer;
