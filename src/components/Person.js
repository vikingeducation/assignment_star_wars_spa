import React from 'react';
import { withRouter } from 'react-router';
import superagent from 'superagent';

const Person = props => {
  //  console.log('person line 5', props);
  const { name, homeworld, films, species } = props.location.state;

  return (
    <div>
      <ul>
        <li>
          Name: {name}
        </li>
        <li>Species:</li>
        <li>Homeworld:</li>
        <li>Films:</li>
      </ul>
    </div>
  );
};

//todo: convert to info desplay
export default withRouter(Person);
