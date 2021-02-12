import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/redux-store";
// import store from "./redux/store";

let renderTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      // на самом деле не обязателен
      // когда ты перейдешь на настоящий редакс
      // ты вообще не будешь прокидывать ни стор ни диспатч
      // а пока пусть ,удет
      <App store={store} dispatch={store.dispatch.bind(store)}/>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

store.subscribe(renderTree);
renderTree()

reportWebVitals();
