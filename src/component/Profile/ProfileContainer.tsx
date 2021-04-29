import React from "react";
import {getUserProfile, UserProfileType} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

type MapStatePropsType = {
  profile: UserProfileType | null
  isAuth: boolean
}

type MapDispatchPropsType = {
  // setUserProfile: (profile: UserProfileType | null) => void
  getUserProfile: (userId: string) => void
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
    this.props.getUserProfile(userId);
  }

  render() {

    if (!this.props.isAuth) return <Redirect to="/login" />

    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    )
  }
}

let mapStateToProps = (state: RootStateType): MapStatePropsType => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
  }
};

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);