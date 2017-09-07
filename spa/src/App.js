import React, { Component } from "react";
import Display from "./Components/Display";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">things</p>
        {/* Nav */}
        <Display />
      </div>
    );
  }
}

export default App;
