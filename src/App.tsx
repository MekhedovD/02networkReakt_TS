import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import Profile from "./component/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./component/News/News";
import Settings from "./component/Settings/Settings";
import Music from "./component/Music/Music";
import DialogsContainer from "./component/Dialogs/DialogsContainer";
import UsersContainer from "./component/Users/UsersContainer";


const App: React.FC = () => {

  return (
    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <div className="app-wrapper-content">
        <Route path="/dialogs" render={() =><DialogsContainer />}/>
        <Route path="/profile" render={() => <Profile />}/>
        <Route path="/users" render={() => <UsersContainer />}/>
        <Route path="/news" render={() => <News/>}/>
        <Route path="/music" render={() => <Music/>}/>
        <Route path="/settings" render={() => <Settings/>}/>
      </div>
    </div>
  );
}

export default App;
