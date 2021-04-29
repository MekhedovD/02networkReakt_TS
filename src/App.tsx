import React from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import {Route} from "react-router-dom";
import News from "./component/News/News";
import Settings from "./component/Settings/Settings";
import Music from "./component/Music/Music";
import DialogsContainer from "./component/Dialogs/DialogsContainer";
import UsersContainer from "./component/Users/UsersContainer";
import ProfileContainer from "./component/Profile/ProfileContainer";
import HeaderContainer from "./component/Header/HeaderContainer";
import LoginPage from "./component/Login/Login";


const App: React.FC = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer/>
      <Navbar/>
      <div className="app-wrapper-content">
        <Route path="/dialogs" render={() =><DialogsContainer />}/>
        <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>
        <Route path="/users" render={() => <UsersContainer />}/>
        <Route path="/login" render={() => <LoginPage />}/>
        <Route path="/news" render={() => <News/>}/>
        <Route path="/music" render={() => <Music/>}/>
        <Route path="/settings" render={() => <Settings/>}/>
      </div>
    </div>
  );
}

export default App;
