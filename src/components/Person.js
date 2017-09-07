import React from 'react';
import { withRouter } from 'react-router';
import superagent from 'superagent';

const Person = props => {
//  console.log('person line 5', props);
  const { name, homeworld, films, species } = props.location.state;

  const genericGetter = async (url) => {
    try {
      const response = await superagent.get(url);
      console.log(response.text)
      return response.text
    } catch (e) {
      console.error(e);
    }
  };

  let thisFilms = genericGetter(films).title
  let thisSpecies = genericGetter(species).name
  let thisHomeworld = genericGetter(homeworld).name

  console.log("Films ", thisFilms)
console.log("Species ", thisSpecies)
console.log("Homeworld ", thisHomeworld)

  return (
    <div>
      <ul>
        <li>
          Name: {name}
        </li>
        <li>
          Species: {thisSpecies}
        </li>
        <li>
          Homeworld: {thisHomeworld}
        </li>
        <li>
          Films: {thisFilms}
        </li>
      </ul>
    </div>
  );
};

//todo: convert to info desplay
export default withRouter(Person);