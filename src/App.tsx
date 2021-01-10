import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import Profile from "./component/Profile/Profile";
// import {PostType} from "./component/Profile/MyPost/Post/Post";
import Dialogs from "./component/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./component/News/News";
import Settings from "./component/Settings/Settings";
import Music from "./component/Music/Music";
import state from "./Redax/State";
import {addPost} from "./Redax/State";


function App() {

  return (
    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <div className="app-wrapper-content">
        <Route path="/dialogs" render={() =>
          <Dialogs dialogs={state.dialogsPage.dialogs}  messages={state.dialogsPage.messages}
        />}/>
        <Route path="/profile" render={() => <Profile
          posts={state.profilePage.posts}
          addPostCallback={addPost}
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
