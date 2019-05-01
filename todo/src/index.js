import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// 1. import create store
import { createStore } from "redux";
import { Provider } from "react-redux";

//2. create the store, pass in reducer

const store = createStore(reducer);
//3. Create reducer (move to its own file)

//wrap provider and add store
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
