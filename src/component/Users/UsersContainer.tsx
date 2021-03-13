import React, {Dispatch} from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {RootStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC, UsersType} from "../../redux/users-reducer";
import {Action} from "redux";

type MapStateToProps = {
  users: Array<UsersType>
}

type MapDispatchToProps = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUser: (users: Array<UsersType>) => void,
}

let mapStateToProps = (state: RootStateType): MapStateToProps => {
  return {
    users: state.usersPage.users
  }
}

let mapDispatchToProps = (dispatch: Dispatch<Action<string>>): MapDispatchToProps => {
  return {
    follow: (userId: number) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId: number) => {
      dispatch(unfollowAC(userId));
    },
    setUser: (users: Array<UsersType>) => {
      dispatch(setUsersAC(users));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);