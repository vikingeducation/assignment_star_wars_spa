import React, { Component } from "react";
import Display from "./Components/Display";
import { BootNav } from "./Components/BootNav";

const UNIVERSAL_COMMON = "Universal Common";
const WOOKIE = "Wookie Accessible";
const languages = {
  UNIVERSAL_COMMON,
  WOOKIE
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { language: UNIVERSAL_COMMON };
    this.handleClick = this.onClick.bind(this);
  }
  onClick = e => {
    //grabbing this information from the state is pretty sketchy
    this.setState({
      language: e.target.text
    });
  };
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <BootNav onClick={this.handleClick} />
        <div className="container">
          <Display />
        </div>
      </div>
    );
  }
}

export default App;
