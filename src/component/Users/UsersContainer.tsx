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
    follow: (userId: any) => void,
    unfollow: (userId: any) => void,
    setUser: (users: Array<UsersType>) => void,
}

let mapStateToProps = (state: RootStateType): MapStateToProps => {
  return {
    users: state.usersPage.users
  }
}

let mapDispatchToProps = (dispatch: Dispatch<Action<string>>):MapDispatchToProps => {
  return {
    follow: (userId: string) => { //!!!
      dispatch(followAC(userId));
    },
    unfollow: (userId: string) => { //!!!
      dispatch(unfollowAC(userId));
    },
    setUser: (users: Array<UsersType>) => { //!!!
      dispatch(setUsersAC(users));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);