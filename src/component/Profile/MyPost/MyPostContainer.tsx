import React from "react";
import {addPostAC, changeNewTextAC, PostType} from "../../../redux/profile-reducer";
import {ActionsTypes, ReduxStoreType} from "../../../redux/redux-store";
import MyPost from "./MyPost";

export type MyPostContainerPropsType = {
  // message: string
  // posts: Array<PostType>
  // dispatch: (action: ActionsTypes) => void
  store: ReduxStoreType
}

const MyPostContainer = (props: MyPostContainerPropsType) => {

  let state = props.store.getState();

  let addPost = () => {
    // здесь вообще по хорошему вообще не нужно ничего передавать
    // не понимаю для чего ты это сделал
    // и здесь теперь передавать ничего не нужно тоже
    props.store.dispatch(addPostAC())
  };

  let onPostChange = (value: string) => {
    // 2. И вот здесь я приму его и передам дальше в редьюсер
    props.store.dispatch(changeNewTextAC(value));
  }

  // в компоненту ты дол;ен ,ыл передавать введенное значение? но его неиту
  // ну;но передать
  return (<MyPost
    message={state.profilePage.newPostText}
    // message={props.message}
    posts={state.profilePage.posts}
    // posts={props.posts}
    addPost={addPost}
    onPostChange={onPostChange}
    />)
}

export default MyPostContainer;

// теперь все хорошо
// попробуй запусти браузер и проверь