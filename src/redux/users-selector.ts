import {RootStateType} from "./redux-store";
import {createSelector} from "reselect";

const getUsersSelector = (state: RootStateType) => {
  return state.usersPage.users
}

export const getUsers = createSelector(getUsersSelector, (users) => {
  return users.filter(u => true);
})

export const getPageSize = (state: RootStateType) => {
  return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: RootStateType) => {
  return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: RootStateType) => {
  return state.usersPage.currentPage
}

export const getTotalCount = (state: RootStateType) => {
  return state.usersPage.totalUsersCount
}

export const getIsLoading = (state: RootStateType) => {
  return state.usersPage.isLoading
}

export const getFollowingInProgress = (state: RootStateType) => {
  return state.usersPage.followingInProgress
}
