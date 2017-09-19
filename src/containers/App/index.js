import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { ResourcesActions } from "../../actions";
import "./App.css";
import App from "../../components/App";

export default connect(state => state, ResourcesActions)(App);
