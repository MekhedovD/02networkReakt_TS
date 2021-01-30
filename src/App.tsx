import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import Profile from "./component/Profile/Profile";
import Dialogs from "./component/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./component/News/News";
import Settings from "./component/Settings/Settings";
import Music from "./component/Music/Music";
import store, {ActionsTypes, StoreType} from "./redux/store";

type PropsType = {
  store: StoreType
  dispatch: (action: ActionsTypes) => void
}

const App: React.FC<PropsType> = (props) => {
  const state = props.store.getState();

  return (
    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <div className="app-wrapper-content">
        <Route path="/dialogs" render={() =><Dialogs
          dialogs={state.dialogsPage.dialogs}
          messages={state.dialogsPage.messages}
          message={state.dialogsPage.newMessageBody}
          dispatch={props.store.dispatch.bind(props.store)}
        />}/>
        <Route path="/profile" render={() => <Profile
          posts={state.profilePage.posts}
          dispatch={props.store.dispatch.bind(props.store)}
          message={state.profilePage.newPostText}
        />}/>
        <Route path="/news" render={() => <News/>}/>
        <Route path="/music" render={() => <Music/>}/>
        <Route path="/settings" render={() => <Settings/>}/>
      </div>
    </div>
  );
}

export default App;
