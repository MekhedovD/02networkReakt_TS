// import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {subscribe} from "./Redax/State";
// import {renderTree} from "./render";
// import state from "./Redax/State";
// import {renderTree} from "./render";
import {RootStateType} from "./Redax/State";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";

let renderTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root')
  );
}
// renderTree(state)

subscribe(renderTree);

reportWebVitals();
