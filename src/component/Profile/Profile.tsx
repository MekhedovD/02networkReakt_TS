import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";


const Profile = () => {
  return (
    <div>
      <ProfileInfo/>
      {/*<MyPostContainer store={props.store} />*/}
      <MyPostContainer />
    </div>
  )
}

export default Profile;