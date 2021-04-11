import React, {Dispatch} from "react";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {
  follow,
  setCurrentPage,
  setUsers,
  setTotalUsersCount, toggleIsLoading,toggleFollowingProgress,
  unfollow,
  UsersType
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preolader/Preolader";
import {usersAPI} from "../../api/api";

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
  unfollow: (id: number) => void
  follow: (id: number) => void
  setUsers: (users: Array<UsersType>) => void
  setCurrentPage: (currentPage: number) => void
  setTotalUsersCount: (totalCount: number) => void
  totalUsersCount: number
  pageSize: number
  currentPage: number
  isLoading: boolean
  toggleIsLoading: (isLoading: boolean) => void
  toggleFollowingProgress: (isLoading: boolean, userId: number) => void
  followingInProgress: Array<number>

}

class UsersContainer extends React.Component<UsersPropsType> {

  componentDidMount() {
    this.props.toggleIsLoading(true)
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        this.props.toggleIsLoading(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      })
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsLoading(true);
    usersAPI.getUsers(pageNumber, this.props.pageSize)
      .then(data => {
        this.props.toggleIsLoading(false);
        this.props.setUsers(data.items);
      })
  }

  render() {

    return <>
      { this.props.isLoading ? <Preloader /> : null }
      <Users totalUsersCount={this.props.totalUsersCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             users={this.props.users}
             onPageChanged={this.onPageChanged}
             unfollow={this.props.unfollow}
             follow={this.props.follow}
             toggleFollowingProgress={this.props.toggleFollowingProgress}
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

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsLoading,
  toggleFollowingProgress
})(UsersContainer);