import React from 'react';
import PersonCard from './PersonCard';
import {Grid, Row} from 'react-bootstrap';
import SearchContainer from '../containers/SearchContainer';

const getResourceID = url => {
  let urlParts = url.split('/');
  let id = urlParts[urlParts.length-2];
  return id;
};

const People = ({people, isFetching}) => {
  const peopleCards = people.map((person, index) => (
    <PersonCard person={person} key={person.name} id={getResourceID(person.url)}/>
  ));
  return (
    <Grid>
      <h1>People</h1>
      <SearchContainer type="people"/>
      <Row>
        {isFetching ? 
        <span className="img-loader" /> : 
        peopleCards}
      </Row>
    </Grid>
  )
};

export default People;