import React from "react";
import ListPeople from "../components/ListPeople";

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
  }

  componentDidMount() {
    this.getPeopleList();
  }

  componentDidUpdate() {
    this.getPeopleList();
  }

  handlePageChange = (page) => () => {
    this.setState({page: `${page}`})
  }

  render() {
    return <ListPeople {...this.state} onClick={this.handlePageChange} />;
  }
}

export default ListPeopleContainer;
