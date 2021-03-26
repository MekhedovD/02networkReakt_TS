import React, {Dispatch} from "react";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {
  followAC,
  setCurrentPageAC,
  setUsersAC,
  setUsersTotalCountAC,
  unfollowAC,
  UsersType
} from "../../redux/users-reducer";
import {Action} from "redux";
import axios from "axios";
import Users from "./Users";

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

type UsersPropsType = {
  users: Array<UsersType>
  unfollow: (id: number) => void
  follow: (id: number) => void
  setUser: (users: Array<UsersType>) => void
  setCurrentPage: (currentPage: number) => void
  setTotalUsersCount: (totalCount: number) => void
  totalUsersCount: number //!
  pageSize: number //!
  currentPage: number //!
}

class UsersContainer extends React.Component<UsersPropsType> {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUser(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUser(response.data.items)
      })
  }

  render() {


    return <Users totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  currentPage={this.props.currentPage}
                  users={this.props.users}
                  onPageChanged={this.onPageChanged}
                  unfollow={this.props.unfollow}
                  follow={this.props.follow}
    />
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);