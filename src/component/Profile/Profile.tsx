import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";
import {UserProfileType} from "../../redux/profile-reducer";

type ProfileType = {
  profile: UserProfileType | null
}

const Profile = (props: ProfileType) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostContainer />
    </div>
  )
}

export default Profile;