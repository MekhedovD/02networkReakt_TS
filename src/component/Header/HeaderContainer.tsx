import React from "react";
import {AuthStateType, setAuthUserData} from "../../redux/auth-reducer";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
  isAuth: boolean
  login: string | null
}

type MapDispatchToPropsType = {
  setAuthUserData: (id: number | null, email: string | null, login: string | null) => void
}

export type HeaderContainerType = MapStateToPropsType & MapDispatchToPropsType


class HeaderContainer extends React.Component<HeaderContainerType> {

  componentDidMount() {
    // основная пробема была в том что ты в конце поставил фигурную скобку
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true,
      // перейди на документацию
      headers: {
        'api-key': '70d80796-3f72-4c1c-8a51-937b510017ff'
      }
    })
      .then(response => {
        if (response.data.resultCode === 0) {
          let {id, email, login} = response.data.data;
          this.props.setAuthUserData(id, email, login,);
        }
      })
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

export default connect(MapStateToProps, {setAuthUserData: setAuthUserData})(HeaderContainer);