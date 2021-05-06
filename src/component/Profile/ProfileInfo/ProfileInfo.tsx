import React from "react";
import { UserProfileType } from "../../../redux/profile-reducer";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preolader/Preolader";
import ProfileStatus from "./ProfileStatus";

type ProfileInfoType = {
  profile: UserProfileType | null
  status: string
  updateStatus: (status: string) => void
}

const ProfileInfo = (props: ProfileInfoType) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      {/*<div>*/}
      {/*  <img src="https://tinypng.com/images/social/website.jpg" alt=""/>*/}
      {/*</div>*/}
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        <ProfileStatus status={props.status}
                       updateStatus={props.updateStatus}
        />
        {/*<ProfileStatus status={props.profile.status}/>*/}
      </div>
    </div>
  )
}

export default ProfileInfo;