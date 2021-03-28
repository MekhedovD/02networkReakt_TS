import React, {Dispatch} from "react";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {
  followAC,
  setCurrentPageAC,
  setUsersAC,
  setUsersTotalCountAC, toggleIsLoadingAC,
  unfollowAC,
  UsersType
} from "../../redux/users-reducer";
import {Action} from "redux";
import axios from "axios";
import Users from "./Users";
// import preloader from "../../assets/images/preolader.svg";
import Preloader from "../common/Preolader/Preolader";

type MapStateToProps = {
  users: Array<UsersType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  totalCount: number
  isLoading: boolean
}

type MapDispatchToProps = {
  follow: (userId: number) => void,
  unfollow: (userId: number) => void,
  setUser: (users: Array<UsersType>) => void,
  setCurrentPage: (pageNumber: number) => void,
  setTotalUsersCount: (totalCount: number) => void,
  toggleIsLoading: (isLoading: boolean) => void
}

type UsersPropsType = {
  users: Array<UsersType>
  unfollow: (id: number) => void
  follow: (id: number) => void
  setUser: (users: Array<UsersType>) => void
  setCurrentPage: (currentPage: number) => void
  setTotalUsersCount: (totalCount: number) => void
  totalUsersCount: number
  pageSize: number
  currentPage: number
  isLoading: boolean
  toggleIsLoading: (isLoading: boolean) => void
}

class UsersContainer extends React.Component<UsersPropsType> {

  componentDidMount() {
    this.props.toggleIsLoading(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsLoading(false);
        this.props.setUser(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      })
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsLoading(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsLoading(false);
        this.props.setUser(response.data.items);
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
    },
    toggleIsLoading: (isLoading:boolean ) => {
      dispatch(toggleIsLoadingAC(isLoading));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);