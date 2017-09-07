import React from "react";
import ShowPlanet from "../components/ShowPlanet";
import ShowPerson from "../components/ShowPerson";

class ShowResourceContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      resource: {}
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    fetch(`https://swapi.co/api/${this.props.resource}/${id}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ resource: data });
      });
  }

  render() {
    const { resource } = this.state;

    const resourceHash = {
      people: (<ShowPerson resource={resource}/>)
      planets: (<ShowPlanet resource={resource}/>)
    };

    return resourceHash[this.props.resource];
  }
}

export default ShowResourceContainer;
