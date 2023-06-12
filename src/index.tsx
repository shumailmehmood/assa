import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/base/index.scss";
import App from "./routes/index";
import * as serviceWorker from "./serviceWorker";
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import { api } from './store/services/locations'

ReactDOM.render(
  <React.StrictMode>
    <ApiProvider api={api}>
      <App />
    </ApiProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
