import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import People from "../components/People";
import { getPeople, getSearchResults } from "../actions";
import parse from "url-parse";
import serialize from "form-serialize";

class PeopleContainer extends Component {
  componentDidMount() {
    let url = parse(this.props.location.search, true);
    let page = url.query.page || 1;
    this.props.getPeople(page);
  }
  componentWillReceiveProps(newProps) {
    console.log("NEW", newProps);
    if (newProps.location.search !== this.props.location.search) {
      let newUrl = parse(newProps.location.search, true);
      let page = newUrl.query.page || 1;
      this.props.getPeople(page);
    }
  }

  render() {
    const { people, isFetching, page, onSubmit, searchResults } = this.props;
    return (
      <div>
        <People
          people={people}
          searchResults={searchResults}
          isFetching={isFetching}
          page={page}
          onSubmit={onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    people: state.people,
    page: state.page,
    isFetching: state.isFetching,
    searchResults: state.searchResults
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPeople: page => {
      dispatch(getPeople(page));
    },
    onSubmit: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });
      if (data.searchText) {
        dispatch(getSearchResults(1, data.searchText));
        form.reset();
      }
    }
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PeopleContainer)
);
