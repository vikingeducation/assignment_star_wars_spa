import React, { Component } from "react";
import { connect } from "react-redux";
import { clearData } from "../actions";

class HomeContainer extends Component {
  componentDidMount() {
    this.props.resetData();
  }

  render() {
    return (
      <p>
        To get started, click on section of sidebar to view information, or
        select a section and type in the search box to search that current
        section.
      </p>
    );
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
