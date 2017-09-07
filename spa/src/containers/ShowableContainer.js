import React from "react";
import connect from "react-redux";
import Showable from "../Containers/elements/Showable";

const mapStateToProps = state => {
  isFetching: state.isFetching;
};

const ShowableContainer = connect(mapStateToProps, null)(Showable);
