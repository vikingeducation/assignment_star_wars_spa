import React from "react";
import ShowPerson from "../components/ShowPerson";

class ShowPersonContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      person: { name: ""}
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    fetch(`https://swapi.co/api/people/${id}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ person: data });
      });
  }

  render() {
    const { person } = this.state;

    return <ShowPerson person={person} />;
  }
}

export default ShowPersonContainer;
