import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as Actions from "../../actions";
import PersonView from "../../components/PersonView";

const mapStateToProps = state => ({
  PersonReducer: state.PersonReducer
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions.PersonActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonView);
