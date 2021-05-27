import React, {ChangeEvent} from "react";
import s from "./MyPost.module.css";
import {PostType} from "../../../redux/profile-reducer";
import Post from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type MyPostPropsType = {
  posts: Array<PostType>
  addPost: (message: string) => void
}

export type PostFormDateType = {
  newPostText: string
}

const MyPost = (props: MyPostPropsType) => {
  let postsElement = props.posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount}/>);

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
}

const AddNewPostForm: React.FC<InjectedFormProps<PostFormDateType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component="textarea" name="newPostText"/>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm<PostFormDateType>({form: "profileAddPostForm"})(AddNewPostForm);

export default MyPost;