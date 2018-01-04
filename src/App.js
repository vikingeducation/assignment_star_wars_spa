import React, { Component } from 'react';
import logo from './sabers.jpeg';
import './App.css';
import Navbar from './Navbar';
import FilmsList from './Components/Pages/FilmsList';
import PeopleList from './Components/Pages/PeopleList';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch
} from 'react-router-dom';

const filmsArray = ['film1', 'film2', 'film3'];

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to the Dark Side</h1>
            <Navbar />
          </header>
          <Route path="/films" render={props => <FilmsList {...props} />} />
          <Route path="/people" render={props => <PeopleList {...props} />} />
        </div>
      </Router>
    );
  }
}

export default App;
