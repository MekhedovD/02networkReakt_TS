import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store, {RootStateType} from "./redux/redux-store";
import {Provider} from "react-redux";

let renderTree = (state: RootStateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

renderTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderTree(state);
});


// store.subscribe(renderTree);
// renderTree()

reportWebVitals();
