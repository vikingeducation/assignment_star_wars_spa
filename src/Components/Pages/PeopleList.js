import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch
} from 'react-router-dom';
import Person from '../Person';

class PeopleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    };
  }

  componentDidMount() {
    // this.setState({ isFetching: true });
    fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        let people = json.results;

        console.log(people);
        this.setState({
          people
        });
      });
  }

  render() {
    console.log(this.state);
    const { people } = this.state;

    return (
      <div className="FilmsList">
        {people.map((person, index) => <Person person={person} key={index} />)}
      </div>
    );
  }
}

export default PeopleList;
