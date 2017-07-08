import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom'
import Header from './elements/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title={"Star Wars Encyclopedia"} />
      </div>
    );
  }
}

export default App;
