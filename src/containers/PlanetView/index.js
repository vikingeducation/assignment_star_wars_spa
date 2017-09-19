import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '../../actions';
import PlanetView from '../../components/PlanetView';

const mapStateToProps = state => ({
	PlanetReducer: state.PlanetReducer
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(Actions.PlanetActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PlanetView);
