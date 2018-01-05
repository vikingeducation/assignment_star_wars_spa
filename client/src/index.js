import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppContainer from "./containers/AppContainer";

import { createStore, applyMiddleware } from "redux";
import { starWars } from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

let store = createStore(starWars, applyMiddleware(thunk));
console.log("state =>", store.getState());

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);
