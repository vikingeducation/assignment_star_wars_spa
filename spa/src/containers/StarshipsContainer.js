import React from "react";
import { connect } from "react-redux";
import {getStarships, getStarship} from '../actions/starships'
import Starships from '../Components/Starships'


class StarshipsContainer{
  componentDidMount(){
    this.props.getIntitialStarships()
  }
  render(){
    //
    return (
      <div>STTARTSHIPS</div>

    )
  }
}
 // = () => <div>STTARTSHIPS</div>;

const mapStateToProps = state => {
  return {
    starships: state.starships
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getIntitialStarships = () =>{
      dispatch(getStarships)
    },
    onClick = e =>{
      //TODO: write this
    }
  };
};

const StarshipsContainer = connect(mapStateToProps, mapDispatchToProps)(
  StarshipsContainer
);

export default StarshipsContainer;
