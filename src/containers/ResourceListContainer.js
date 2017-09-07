import React, { Component } from "react";
import { connect } from "react-redux";
import ResourceList from "../components/ResourceList";
import { fetchList } from "../actions";

class ResourceListContainer extends Component {
  componentDidMount() {
    this.props.fetch(this.props.resource);
  }

  render() {
    return <ResourceList {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => ({
  list: state[ownProps.resource],
  status: state.status,
  resource: ownProps.resource
});

const mapDispatchToProps = dispatch => ({
  fetch: resource => dispatch(fetchList(resource))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  ResourceListContainer
);
