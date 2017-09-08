import React, { Component } from "react";
import { connect } from "react-redux";
import Resource from "../components/Resource";
import { fetchSingle } from "../actions";

class ResourceContainer extends Component {
  componentDidMount() {
    this.props.fetchSingle(
      this.props.match.params.type,
      this.props.match.params.id
    );
  }

  render() {
    return <Resource {...this.props} />;
  }
}

const mapStateToProps = state => ({
  resource: state.resource,
  status: state.status
});

const mapDispatchToProps = dispatch => ({
  fetchSingle: (type, id) => dispatch(fetchSingle(type, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ResourceContainer);
