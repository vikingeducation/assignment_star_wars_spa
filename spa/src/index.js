import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { BrowserRouter as ReacterRouter } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";

const store = createStore(rootReducer, applyMiddleware(thunk));
console.log("store = ", store.getState());
ReactDOM.render(
  <Provider store={store}>
    <ReacterRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </ReacterRouter>
  </Provider>,
  document.getElementById("root")
);
