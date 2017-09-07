import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as Actions from "../../actions";
import PeopleHome from "../../components/PeopleHome";
// import "./PeopleHome.css";

const mapStateToProps = state => ({
  PeopleReducer: state.PeopleReducer
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions.PeopleActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PeopleHome);
