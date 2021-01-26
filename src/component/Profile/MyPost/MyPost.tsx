import React, {ChangeEvent} from "react";
import s from "./MyPost.module.css";
import {addPostAC, changeNewTextAC, PostType} from "../../../Redax/profile-reducer";
import Post from "./Post/Post";
import {ActionsTypes} from "../../../Redax/State";

export type MyPostPropsType = {
  message: string
  posts: Array<PostType>
  dispatch: (action: ActionsTypes) => void
}

const MyPost = (props: MyPostPropsType) => {
  let postsElement = props.posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount}/>);

  let addPost = () => {
    props.dispatch(addPostAC(props.message))
  };

  let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(changeNewTextAC(e.currentTarget.value));
  }
  console.log(onPostChange)

  return (
    <div className={s.postSBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            value={props.message}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElement}
      </div>
    </div>
  )
}

export default MyPost;