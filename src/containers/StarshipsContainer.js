import React, { Component } from "react";
import { connect } from "react-redux";
import Starships from "../components/Starships";
import {
  getStarshipsFromAPI
} from "../actions";

class StarshipsContainer extends Component {
  componentDidMount() {
    this.props.getStarshipsFromAPI(null, this.props.page);
  }

  render() {
    return <Starships {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    starships: state.starships.allStarships,
    isFetching: state.starships.isFetchingAll,
    page: state.starships.page
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getStarshipsFromAPI: (searchTerm, page) => {
      dispatch(getStarshipsFromAPI(searchTerm, page));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  StarshipsContainer
);