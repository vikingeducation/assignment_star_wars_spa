import React from "react";
import ListPlanets from "../components/ListPlanets";

class ListPlanetsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      planets: []
    };
  }

  componentDidMount() {
    fetch("https://swapi.co/api/planets")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ planets: data.results });
      });
  }

  render() {
    const { planets } = this.state;

    return <ListPlanets planets={planets} />;
  }
}

export default ListPlanetsContainer;
