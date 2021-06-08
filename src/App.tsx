import React from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import News from "./component/News/News";
import Settings from "./component/Settings/Settings";
import Music from "./component/Music/Music";
import DialogsContainer from "./component/Dialogs/DialogsContainer";
import UsersContainer from "./component/Users/UsersContainer";
import ProfileContainer from "./component/Profile/ProfileContainer";
import HeaderContainer from "./component/Header/HeaderContainer";
import Login from "./component/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {RootStateType} from "./redux/redux-store";
import Preloader from "./component/common/Preolader/Preolader";


type MapStatePropsType = {
  initialized: boolean
}

type MapDispatchToPropsType = {
  initializeApp: () => void,
  initialized: false
}

export type AppContainerType = MapDispatchToPropsType

class App extends React.Component<AppContainerType> {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer/>
        <Navbar/>
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer/>}/>
          <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
          <Route path="/users" render={() => <UsersContainer/>}/>
          <Route path="/login" render={() => <Login/>}/>
          <Route path="/news" render={() => <News/>}/>
          <Route path="/music" render={() => <Music/>}/>
          <Route path="/settings" render={() => <Settings/>}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
  initialized: state.app.initialized
})

export default compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, {initializeApp})
)(App);
