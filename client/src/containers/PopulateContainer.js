import React from "react";
import { connect } from "react-redux";

const Populate = ({ entities }) => {
  const gallery = entities.map((entity, index) => {
    return <p key={index}>{entity.title} </p>;
  });
  return <div>{gallery}</div>;
};

const mapStateToProps = state => {
  return {
    entities: state.starWarsReducer.entities
  };
};

const PopulateContainer = connect(mapStateToProps)(Populate);
export default PopulateContainer;
