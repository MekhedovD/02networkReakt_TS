import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";
import {UserProfileType} from "../../redux/profile-reducer";

type ProfilePropsType = {
  profile: UserProfileType | null
}

const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostContainer />
    </div>
  )
}

export default Profile;