import React from "react";
import ShowPlanet from "../components/ShowPlanet";
import ShowPerson from "../components/ShowPerson";
import ShowFilm from "../components/ShowFilm";
import ShowStarship from "../components/ShowStarship";
import ShowVehicle from "../components/ShowVehicle";

class ShowResourceContainer extends React.Component {
  constructor({ location }) {
    super();

    this.resource = location.pathname.split("/")[1];

    this.state = {
      resource: {}
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    fetch(`https://swapi.co/api/${this.resource}/${id}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ resource: data });
      });
  }

  render() {
    const { resource } = this.state;

    const resourceHash = {
      people: <ShowPerson resource={resource} />,
      planets: <ShowPlanet resource={resource} />,
      films: <ShowFilm resource={resource} />,
      starships: <ShowStarship resource={resource} />,
      vehicles: <ShowVehicle resource={resource} />
    };

    return resourceHash[this.resource] || null;
  }
}

export default ShowResourceContainer;
