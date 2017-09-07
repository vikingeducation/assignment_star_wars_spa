import React from "react";
import ListResource from "../components/ListResource";
import Search from "../components/Search";

class ListPeopleContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      people: [],
      page: "1",
      numPages: "0"
    };
  }

  getPeopleList = e => {
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

  handleSearch = e => {
    const search = e ? `$search=${e.target.value}` : "";
  };

  render() {
    return (
      <div className="resource">
        <h1 className="resource-title">People</h1>
        <Search onChange={this.handleSearch} />
        <ListResource
          resourceName={"people"}
          resource={this.state.people}
          {...this.state}
          onClick={this.handlePageChange}
        />
      </div>
    );
  }
}

export default ListPeopleContainer;
