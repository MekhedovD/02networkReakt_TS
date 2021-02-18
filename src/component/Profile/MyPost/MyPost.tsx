import React, {ChangeEvent} from "react";
import s from "./MyPost.module.css";
import {PostType} from "../../../redux/profile-reducer";
import Post from "./Post/Post";

export type MyPostPropsType = {
  posts: Array<PostType>
  message: string
  addPost: () => void
  onPostChange: (value: string) => void
}

const MyPost = (props: MyPostPropsType) => {
  let postsElement = props.posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount}/>);

  let addPost = () => {
    props.addPost()
  };

  let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.onPostChange(e.currentTarget.value)
  }

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