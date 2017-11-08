import React, { Component } from "react";
import { connect } from "react-redux";
import { clearData } from "../actions";

class HomeContainer extends Component {
  componentDidMount() {
    this.props.resetData();
  }

  render() {
    return <p>Home</p>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetData: () => {
      dispatch(clearData());
    }
  };
};

export default connect(null, mapDispatchToProps)(HomeContainer);
