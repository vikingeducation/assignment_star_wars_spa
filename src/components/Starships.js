import React from 'react';
import StarshipCard from './StarshipCard';
import {Grid, Row} from 'react-bootstrap';
import SearchContainer from '../containers/SearchContainer';
import PaginationContainer from '../containers/PaginationContainer';

const getResourceID = url => {
  let urlParts = url.split('/');
  let id = urlParts[urlParts.length-2];
  return id;
};

const Starships = ({starships, isFetching, page}) => {
  const starshipCards = starships.map((starship, index) => (
    <StarshipCard starship={starship} key={index} id={getResourceID(starship.url)}/>
  ));
  return (
    <Grid>
      <h1>Starships</h1>
      <SearchContainer type="starships"/>
      <Row>
        {isFetching ? 
        <span className="img-loader" /> : 
        starshipCards}
      </Row>
      <PaginationContainer type="starships" page={page}/>
    </Grid>
  )
};

export default Starships;