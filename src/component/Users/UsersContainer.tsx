import React, {Dispatch} from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {RootStateType} from "../../redux/redux-store";
import {followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC, UsersType} from "../../redux/users-reducer";
import {Action} from "redux";

type MapStateToProps = {
  users: Array<UsersType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  totalCount: number
}

type MapDispatchToProps = {
  follow: (userId: number) => void,
  unfollow: (userId: number) => void,
  setUser: (users: Array<UsersType>) => void,
  setCurrentPage: (pageNumber: number) => void,
  setTotalUsersCount: (totalCount: number) => void,
}

let mapStateToProps = (state: RootStateType): MapStateToProps => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    totalCount: state.usersPage.totalUsersCount,
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
    setCurrentPage: (pageNumber: number) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: (totalCount: number) => {
      dispatch(setUsersTotalCountAC(totalCount));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);