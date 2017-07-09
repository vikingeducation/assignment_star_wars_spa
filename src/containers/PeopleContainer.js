import React, { Component } from "react";
import { connect } from "react-redux";
import People from "../components/People";
import {
  getPeopleFromAPI
} from "../actions";

class PeopleContainer extends Component {
  componentDidMount() {
    this.props.getPeopleFromAPI(null, this.props.page);
  }

  render() {
    return <People {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    people: state.people.people,
    isFetching: state.people.isFetchingAll,
    page: state.people.page
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPeopleFromAPI: (searchTerm, page) => {
      dispatch(getPeopleFromAPI(searchTerm, page));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  PeopleContainer
);
