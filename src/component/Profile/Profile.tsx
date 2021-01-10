import React from "react";
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import state, {changeNewText, PostType} from "../../Redax/State";

export type ProfilePropsType  = {
  message: string
  posts: Array<PostType>
  addPostCallback: (message: string) => void
}

const Profile = (props: ProfilePropsType) => {
  console.log(props.posts)
  return (
    <div>
      <ProfileInfo/>
      <MyPost
        posts={props.posts}
        addPostCallback={props.addPostCallback}
        message={props.message}
        changeNewPostCallback={changeNewText}
      />
    </div>
  )
}

export default Profile;