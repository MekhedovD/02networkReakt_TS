import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";
import {UserProfileType} from "../../redux/profile-reducer";
import Login from "../Login/Login";

type ProfilePropsType = {
  profile: UserProfileType | null
  status: string
  updateStatus: (status: string) => void
}

const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostContainer />
    </div>
  )
}

export default Profile;