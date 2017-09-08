import React, { Component } from "react";
import Display from "./Components/Display";
import { BootNav } from "./Components/BootNav";

const UNIVERSAL_COMMON = "Universal Common";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { language: UNIVERSAL_COMMON };
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <BootNav />
        <div className="container">
          <Display />
        </div>
      </div>
    );
  }
}

export default App;
