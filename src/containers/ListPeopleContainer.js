import React from "react";
import ListPeople from "../components/ListPeople";

class ListPeopleContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      people: []
    };
  }

  componentDidMount() {
    fetch("https://swapi.co/api/people")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ people: data.results });
      });
  }

  render() {
    const { people } = this.state;

    return <ListPeople people={people} />;
  }
}

export default ListPeopleContainer;
