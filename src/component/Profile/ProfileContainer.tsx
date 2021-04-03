import React from "react";
import {setUserProfile, UserProfileType} from "../../redux/profile-reducer";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
  profile: UserProfileType | null
}

type MapDispatchPropsType = {
  setUserProfile: (profile: UserProfileType | null) => void
}


type UserProfilePropsType = MapStateToPropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<UserProfilePropsType> {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        this.props.setUserProfile(response.data);
      })
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    )
  }
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
  return {
   profile: state.profilePage.profile
  }
};


export default connect(mapStateToProps, {setUserProfile: setUserProfile})(ProfileContainer);