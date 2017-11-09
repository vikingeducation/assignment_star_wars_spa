import React, { Component } from "react";
import { connect } from "react-redux";
import { getApiData } from "../actions";
import OnePeople from "../components/Peoples/OnePeople";

class PeopleContainer extends Component {
  componentDidMount() {
    this.props.getPeopleData(this.props.match.params.id);
  }

  render() {
    const { infoData, isFetching } = this.props;
    return <OnePeople peopleData={infoData} isFetching={isFetching} />;
  }
}

const mapStateToProps = state => {
  return {
    infoData: state.infoData,
    isFetching: state.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPeopleData: id => {
      dispatch(getApiData("people", id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer);
