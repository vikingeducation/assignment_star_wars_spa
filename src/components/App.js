import React, { Component } from 'react';
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
