import React from "react";
import ShowPlanet from "../components/ShowPlanet";

class ShowPlanetContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      planet: {}
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    fetch(`https://swapi.co/api/planets/${id}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ planet: data });
      });
  }

  render() {
    const { planet } = this.state;

    return <ShowPlanet planet={planet} />;
  }
}

export default ShowPlanetContainer;
