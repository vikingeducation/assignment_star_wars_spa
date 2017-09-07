import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { BrowswerRouter as ReacterRouter, Routes } from "react-router-dom";

//REDUX
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <ReacterRouter>
      {/* scrolltotop */}
      <App />
    </ReacterRouter>
  </Provider>,
  document.getElementById("root")
);
