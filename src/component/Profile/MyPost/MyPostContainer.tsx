import React from "react";

import {addPostAC, changeNewTextAC, PostType} from "../../../redux/profile-reducer";

import {ActionsTypes} from "../../../redux/redux-store";
import MyPost from "./MyPost";

export type MyPostPropsType = {
  message: string
  posts: Array<PostType>
  dispatch: (action: ActionsTypes) => void
}

const MyPostContainer = (props: MyPostPropsType) => {

  let addPost = () => {
    // здесь вообще по хорошему вообще не нужно ничего передавать
    // не понимаю для чего ты это сделал
    // и здесь теперь передавать ничего не нужно тоже
    props.dispatch(addPostAC())
  };

  let onPostChange = (value: string) => {
    // 2. И вот здесь я приму его и передам дальше в редьюсер
    props.dispatch(changeNewTextAC(value));
  }

  // в компоненту ты дол;ен ,ыл передавать введенное значение? но его неиту
  // ну;но передать
  return (<MyPost
    posts={props.posts}
    addPost={addPost}
    onPostChange={onPostChange}
    message={props.message}
    />)
}

export default MyPostContainer;

// теперь все хорошо
// попробуй запусти браузер и проверь