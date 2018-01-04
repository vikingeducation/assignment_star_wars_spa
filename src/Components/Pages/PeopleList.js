import React, { Component } from 'react';
import Paginator from '../Paginator';
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
      page: 1,
      previous: '',
      next: '',
      people: []
    };
  }

  onClick = page => {
    fetch(`https://swapi.co/api/people/?page=${page}`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        let people = json.results;
        json.previous = json.previous || ' ';
        this.setState({
          people: json.results,
          previous: json.previous.split('/').slice(-2, -1),
          next: json.next.split('/').slice(-2, -1),
          page
        });
      });
  };

  componentDidMount() {
    // this.setState({ isFetching: true });
    console.log('STATE====================');
    console.log(this.state.page);
    console.log('STATE====================');
    fetch(`https://swapi.co/api/people/?page=${this.state.page}`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        let people = json.results;
        json.previous = json.previous || ' ';
        this.setState({
          people: json.results,
          previous: json.previous.split('/').slice(-2, -1),
          next: json.next.split('/').slice(-2, -1),
          page: this.state.page
        });
      });
  }

  render() {
    const { people, previous, next } = this.state;
    console.log(people, previous, next);
    return (
      <div className="container">
        <Paginator previous={previous} next={next} callback={this.onClick} />
        <div className="FilmsList">
          {people.map((person, index) => (
            <Person person={person} key={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default PeopleList;
