import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Films.css';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../actions'
import {Link} from 'react-router-dom'

class Films extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Films from Star Wars API</h2>
          <Link to='/'>Home</Link>
        </div>
        
      </div>
    );
  }
}


const mapStateToProps = (state)=>state

const mapDispatchToProps = (dispatch)=>({
  actions: bindActionCreators(actions.filmActions, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(Films);