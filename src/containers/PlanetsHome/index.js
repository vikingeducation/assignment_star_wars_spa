import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '../../actions';
import PlanetsHome from '../../components/PlanetsHome';
import './PlanetsHome.css';

const mapStateToProps = state => ({
	PlanetsReducer: state.PlanetsReducer
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(Actions.PlanetsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PlanetsHome);
