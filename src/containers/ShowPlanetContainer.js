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
    const name = this.props.match.params.name;
  }

  render() {
    const { planet } = this.state;

    return <ShowPlanet planet={planet} />;
  }
}

export default ShowPlanetContainer;
