import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../actions'
import {Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Star Wars API</h2>
        </div>
        <Link to='/films'>Films</Link>{' '}
        <Link to='/people'>Characters</Link>{' '}
      </div>
    );
  }
}

const mapStateToProps = (state)=>state

const mapDispatchToProps = (dispatch)=>({
  actions: bindActionCreators(actions.filmActions, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
