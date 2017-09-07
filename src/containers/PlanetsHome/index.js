import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as Actions from "../../actions";
// import "./App.css";
import PlanetsHome from "../../components/PlanetsHome";

const mapStateToProps = state => ({
  PlanetsReducer: state.PlanetsReducer
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions.PlanetActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PlanetsHome);
