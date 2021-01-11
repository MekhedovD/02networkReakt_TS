import React, {ChangeEvent} from "react";
import s from "./MyPost.module.css";
import {v1} from "uuid";
import state, {changeNewText, PostType, ProfilePageType} from "../../../Redax/State";
import Post from "./Post/Post";

export type MyPostPropsType = {
  message: string
  posts: Array<PostType>
  addPostCallback: (PostMessage: string) => void
  changeNewPostCallback: (newText: string) => void
}

const MyPost = (props: MyPostPropsType) => {
  let postsElement = props.posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount}/>);

  let  addPost = () => {
    props.addPostCallback(props.message)
  };

  let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.changeNewPostCallback(e.currentTarget.value);
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