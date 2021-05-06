import React from "react";
import {getStatus, getUserProfile, updateStatus, UserProfileType} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "./../../hoc/withAuthRedirect";
import { compose } from "redux";


type MapStatePropsType = {
  profile: UserProfileType | null
  status: string //
}

type MapDispatchPropsType = {
  getUserProfile: (userId: string) => void
  getStatus: (userId: string) => void
  updateStatus: (status: string) => void
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
      userId = "15130";
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
    }

  render() {
    return (
      <div>
        <Profile {...this.props}
                 profile={this.props.profile}
                 status={this.props.status}
                 updateStatus={this.props.updateStatus}
        />
      </div>
    )
  }
}

let mapStateToProps = (state: RootStateType): MapStatePropsType => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status
  }
};

export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus}),
  withRouter,
  // withAuthRedirect,
)(ProfileContainer)
