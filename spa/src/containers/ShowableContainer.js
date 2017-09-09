import React from "react";
import { connect } from "react-redux";
import Showable from "../Components/elements/Showable";

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching.isFetching
  };
};

const ShowableContainer = connect(mapStateToProps, null)(Showable);
export default ShowableContainer;
