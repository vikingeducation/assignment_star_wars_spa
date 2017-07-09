import React, { Component } from "react";
import { connect } from "react-redux";
import Person from "../components/Person";
import { getPerson } from "../actions";

class PersonContainer extends Component {
  componentDidMount() {
    this.props.getPerson();
  }

  render() {
    return <Person {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    person: state.people.person,
    isFetching: state.people.isFetchingSpecific
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getPerson: () => {
      dispatch(getPerson(ownProps.match.params.id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonContainer);
