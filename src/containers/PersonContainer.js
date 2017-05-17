import React, { Component } from "react";
import { connect } from "react-redux";
import { findPerson } from "../helpers";
import Person from "../components/Person";
// import { withRouter } from "react-router-dom";

class PersonContainer extends Component {
  render() {
    return <Person person={this.props.person} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    person: findPerson(ownProps.match.params.id, state.people.results)
  };
};
export default connect(mapStateToProps)(PersonContainer);
