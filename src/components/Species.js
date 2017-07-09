import React from 'react';
import SpeciesCard from './SpeciesCard';
import {Grid, Row} from 'react-bootstrap';
import SearchContainer from '../containers/SearchContainer';
import PaginationContainer from '../containers/PaginationContainer';

const getResourceID = url => {
  let urlParts = url.split('/');
  let id = urlParts[urlParts.length-2];
  return id;
};

const Species = ({species, isFetching, page}) => {
  const speciesCards = species.map((specificSpecies, index) => (
    <SpeciesCard species={specificSpecies} key={index} id={getResourceID(specificSpecies.url)}/>
  ));
  return (
    <Grid>
      <h1>Species</h1>
      <SearchContainer type="species"/>
      <Row>
        {isFetching ? 
        <span className="img-loader" /> : 
        speciesCards}
      </Row>
      <PaginationContainer type="species" page={page}/>
    </Grid>
  )
};

export default Species;