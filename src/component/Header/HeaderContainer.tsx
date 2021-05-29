import React from "react";
import {getAuthUserData, logout} from "../../redux/auth-reducer";
import Header from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
  isAuth: boolean
  login: string | null
}

type MapDispatchToPropsType = {
  getAuthUserData: () => void
  logout: () => void
}

export type HeaderContainerType = MapStateToPropsType & MapDispatchToPropsType


class HeaderContainer extends React.Component<HeaderContainerType> {

  componentDidMount() {
    this.props.getAuthUserData()
  }

  render() {
    return (
      <Header {...this.props}/>
    )
  }
}

const MapStateToProps = (state: RootStateType): MapStateToPropsType => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});



export default connect(MapStateToProps, {getAuthUserData, logout})(HeaderContainer);