import React from "react";
import {setUserProfile, UserProfileType} from "../../redux/profile-reducer";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter } from "react-router-dom";

type MapStatePropsType = {
  profile: UserProfileType | null
}

type MapDispatchPropsType = {
  setUserProfile: (profile: UserProfileType | null) => void
}

type UserProfilePropsType = MapStatePropsType & MapDispatchPropsType

type PatchParamsType = {
  userId: string
}

type PropsType = RouteComponentProps<PatchParamsType> & UserProfilePropsType

class ProfileContainer extends React.Component<PropsType> {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = "2";
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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

let mapStateToProps = (state: RootStateType): MapStatePropsType => {
  return {
   profile: state.profilePage.profile
  }
};

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile: setUserProfile})(WithUrlDataContainerComponent);