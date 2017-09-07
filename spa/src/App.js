import React, { Component } from "react";
import Display from "./Components/Display";
import { Nav } from "./Components/Nav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="container">
          <Display />
        </div>
      </div>
    );
  }
}

export default App;
