import React from "react";
import s from "./MyPost.module.css";
import {PostType} from "../../../redux/profile-reducer";
import Post from "./Post/Post";
import {AddNewPostFormRedux, PostFormDateType} from "../AddNewPostForm/AddNewPostForm";

export type MyPostPropsType = {
  posts: Array<PostType>
  addPost: (message: string) => void
}

const MyPost = React.memo((props: MyPostPropsType) => {
  console.log("RENDER")
  console.log(props)
  let postsElement = [...props.posts]
    .reverse()
    .map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount}/>);

  let addPost = (data: PostFormDateType) => {
    props.addPost(data.newPostText);
  };

  return (
    <div className={s.postSBlock}>
      <h3>My posts</h3>

      <AddNewPostFormRedux onSubmit={addPost}/>

      <div className={s.posts}>
        {postsElement}
      </div>
    </div>
  )
});

export default MyPost;