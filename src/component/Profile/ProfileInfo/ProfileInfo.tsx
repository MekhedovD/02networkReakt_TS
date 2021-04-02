import React from "react";
import { UserProfileType } from "../../../redux/profile-reducer";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preolader/Preolader";

type ProfileType = {
  profile: UserProfileType | null

}

const ProfileInfo = (props: ProfileType) => {
debugger
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div>
        <img src="https://tinypng.com/images/social/website.jpg" alt=""/>
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;