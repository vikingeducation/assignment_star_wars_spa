import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as Actions from "../../actions";
import "./App.css";
import App from "../../components/App";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions.PlanetActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
