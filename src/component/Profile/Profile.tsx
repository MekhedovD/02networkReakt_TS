import React from "react";
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store, {ActionsTypes, PostType} from "../../redux/store";

export type ProfilePropsType  = {
  message: string
  posts: Array<PostType>
  dispatch: (action: ActionsTypes) => void
}

const Profile = (props: ProfilePropsType) => {
  console.log(props.posts)
  return (
    <div>
      <ProfileInfo/>
      <MyPost
        posts={props.posts}
        message={props.message}
        dispatch={store.dispatch.bind(store)}
      />
    </div>
  )
}

export default Profile;