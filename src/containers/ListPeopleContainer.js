import React from "react";
import ListResource from "../components/ListResource";

class ListPeopleContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      people: [],
      page: "1",
      numPages: "1"
    };
  }

  getPeopleList = () => {
    fetch(`https://swapi.co/api/people?page=${this.state.page}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        const numPages = Math.ceil(data.count / 10);
        this.setState({ people: data.results, numPages });
      });
  };

  componentDidMount() {
    this.getPeopleList();
  }

  handlePageChange = page => async () => {
    await Promise.resolve(this.setState({ page: `${page}` }));
    this.getPeopleList();
  };

  render() {
    return (
      <ListResource
        resourceName={"people"}
        resource={this.state.people}
        {...this.state}
        onClick={this.handlePageChange}
      />
    );
  }
}

export default ListPeopleContainer;
