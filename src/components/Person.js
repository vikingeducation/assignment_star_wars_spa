import React from 'react';
import { withRouter } from 'react-router';
import superagent from 'superagent';

const Person = props => {
    console.log('person line 5', props.location.state);
  const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender } = props.location.state;

 

  return (
    <div>
      <ul>
        <li>Name: {name}</li>
        <li>Height: {height}</li>
        <li>Mass: {mass}</li>
        <li>Hair Color: {hair_color}</li>
        <li>Skin Color: {skin_color}</li>
        <li>Eye Color: {eye_color}</li>
        <li>Birth Year: {birth_year}</li>
        <li>Gender: {gender}</li>
      </ul>
    </div>
  );
};

//todo: convert to info desplay
export default withRouter(Person);
