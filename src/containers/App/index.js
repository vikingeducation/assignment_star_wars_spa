import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getResources } from '../../actions/resources';
import './App.css';
import App from '../../components/App';

export default connect(state => state, { getResources })(App);
