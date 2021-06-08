import React from "react";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {
  followSuccess,
  setCurrentPage, toggleFollowingProgress,
  unfollowSuccess,
  UsersType, getUsers,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preolader/Preolader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import { compose } from "redux";

type MapStateToProps = {
  users: Array<UsersType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  totalCount: number
  isLoading: boolean
  followingInProgress: Array<number>
}

// type MapDispatchToProps = {
//   follow: (userId: number) => void,
//   unfollow: (userId: number) => void,
//   setUser: (users: Array<UsersType>) => void,
//   setCurrentPage: (pageNumber: number) => void,
//   setTotalUsersCount: (totalCount: number) => void,
//   toggleIsLoading: (isLoading: boolean) => void
// }

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

let mapStateToProps = (state: RootStateType): MapStateToProps => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    totalCount: state.usersPage.totalUsersCount,
    isLoading: state.usersPage.isLoading,
    followingInProgress: state.usersPage.followingInProgress
  }
}

// let mapDispatchToProps = (dispatch: Dispatch<Action<string>>): MapDispatchToProps => {
//   return {
//     follow: (userId: number) => {
//       dispatch(followAC(userId));
//     },
//     unfollow: (userId: number) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUser: (users: Array<UsersType>) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (pageNumber: number) => {
//       dispatch(setCurrentPageAC(pageNumber));
//     },
//     setTotalUsersCount: (totalCount: number) => {
//       dispatch(setUsersTotalCountAC(totalCount));
//     },
//     toggleIsLoading: (isLoading:boolean ) => {
//       dispatch(toggleIsLoadingAC(isLoading));
//     },
//     toggleFollowingProgress: (isLoading: boolean) => {
//     dispatch(toggleFollowingProgress(isLoading))
//     }
//   }
// }

export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    followSuccess,
    unfollowSuccess,
    setCurrentPage, //вот этот актион надо вызвать когда меняешь страничку
    toggleFollowingProgress,
    getUsers
  }),
  // withAuthRedirect,// да 'то защита? что,ы не авторизованный .зер не смог попасть на 'ту страничку
)(UsersContainer)



