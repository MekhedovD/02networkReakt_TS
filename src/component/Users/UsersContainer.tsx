import React from "react";
import {connect} from "react-redux";
import store, {RootStateType} from "../../redux/redux-store";
import {
  followSuccess,
  setCurrentPage, toggleFollowingProgress,
  unfollowSuccess,
  UsersType, requestUsers,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preolader/Preolader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import {
  getCurrentPage, getFollowingInProgress, getIsLoading,
  getPageSize, getTotalCount,
  getTotalUsersCount, getUsers
} from "../../redux/users-selector";

type MapStateToProps = {
  users: Array<UsersType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  totalCount: number
  isLoading: boolean
  followingInProgress: Array<number>
}

type UsersPropsType = {
  users: Array<UsersType>
  unfollowSuccess: (id: number) => void//
  followSuccess: (id: number) => void
  setCurrentPage: (currentPage: number) => void
  totalUsersCount: number
  pageSize: number
  currentPage: number
  isLoading: boolean
  followingInProgress: Array<number>
  getUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<UsersPropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.pageSize); //тут запрос за новыми юзерами
    this.props.setCurrentPage(pageNumber) //тут  мы устанавливаем новую страничку активной
  }

  render() {
    console.log("ESERS")
    return <>
      { this.props.isLoading ? <Preloader /> : null }
      <Users totalUsersCount={this.props.totalUsersCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             users={this.props.users}
             onPageChanged={this.onPageChanged}
             unfollow={this.props.unfollowSuccess}//
             follow={this.props.followSuccess}
             followingInProgress={this.props.followingInProgress}
      />
    </>
  }
}

// let mapStateToProps = (state: RootStateType): MapStateToProps => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     totalCount: state.usersPage.totalUsersCount,
//     isLoading: state.usersPage.isLoading,
//     followingInProgress: state.usersPage.followingInProgress
//   }
// }

let mapStateToProps = (state: RootStateType): MapStateToProps => {
  console.log("mapStateTP USERSD")

  return {
    users: getUsers(state),
    // users: getUsersSuperSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    totalCount: getTotalCount(state),
    isLoading: getIsLoading(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    followSuccess,
    unfollowSuccess,
    setCurrentPage, //вот этот актион надо вызвать когда меняешь страничку
    toggleFollowingProgress,
    getUsers: requestUsers
  }),
  // withAuthRedirect,// да 'то защита? что,ы не авторизованный .зер не смог попасть на 'ту страничку
)(UsersContainer)



