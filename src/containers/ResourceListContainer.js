import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ResourceList from "../components/ResourceList";
import { fetchList } from "../actions";
import queryString from "query-string";

class ResourceListContainer extends Component {
  componentDidMount() {
    this.props.fetchList(
      this.props.match.params.type,
      this.props.page,
      this.props.search
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.props.fetchList(
        this.props.match.params.type,
        this.props.page,
        this.props.search
      );
    }
  }

  updateSearch = e => {
    this.props.history.push(
      `/${this.props.type}?page=${this.props.page}&search=${e.target.value}`
    );
  };

  render() {
    return <ResourceList {...this.props} updateSearch={this.updateSearch} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  const query = queryString.parse(ownProps.location.search);
  const page = query.page || 1;
  return {
    list: state.resources.list,
    prev: state.resources.prev ? +page - 1 : null,
    next: state.resources.next ? +page + 1 : null,
    type: state.resources.type,
    status: state.status,
    search: query.search,
    page
  };
};

const mapDispatchToProps = dispatch => ({
  fetchList: (type, page, search) => dispatch(fetchList(type, page, search))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ResourceListContainer)
);
