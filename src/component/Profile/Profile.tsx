import React from "react";
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store, {ActionsTypes, PostType} from "../../redux/redux-store";
import MyPostContainer from "./MyPost/MyPostContainer";

export type ProfilePropsType  = {
  message: string
  posts: Array<PostType>
  dispatch: (action: ActionsTypes) => void
}

const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPostContainer
        posts={props.posts}
        message={props.message}
        dispatch={store.dispatch.bind(store)}
      />
    </div>
  )
}

export default Profile;