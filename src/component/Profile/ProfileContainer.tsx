import React from "react";
import {getUserProfile, UserProfileType} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "./../../hoc/withAuthRedirect";
import { compose } from "redux";


type MapStatePropsType = {
  profile: UserProfileType | null
}

type MapDispatchPropsType = {
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

export default compose<React.ComponentType>(
  connect(mapStateToProps, {getUserProfile}),
  withRouter,
  withAuthRedirect,
)(ProfileContainer)
