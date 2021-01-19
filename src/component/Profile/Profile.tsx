import React from "react";
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store, {ActionsTypes, PostType} from "../../Redax/State";

export type ProfilePropsType  = {
  message: string
  posts: Array<PostType>
  // addPostCallback: (message: string) => void
  changeNewTextCallback: (newText: string) => void
  dispatch: (action: ActionsTypes) => void
}

const Profile = (props: ProfilePropsType) => {
  console.log(props.posts)
  return (
    <div>
      <ProfileInfo/>
      <MyPost
        posts={props.posts}
        // addPostCallback={props.addPostCallback}
        message={props.message}
        changeNewPostCallback={props.changeNewTextCallback}
        dispatch={store.dispatch.bind(store)}
      />
    </div>
  )
}

export default Profile;