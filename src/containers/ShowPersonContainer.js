import React from "react";
import ShowPerson from "../components/ShowPerson";

class ShowPersonContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      person: {}
    };
  }

  componentDidMount() {
    const name = this.props.match.params.name;
  }

  render() {
    const { person } = this.state;

    return <ShowPerson person={person} />;
  }
}

export default ShowPersonContainer;
