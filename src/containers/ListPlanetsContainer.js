import React from "react";
import ListResource from "../components/ListResource";
import Search from "../components/Search";

class ListPlanetsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      planets: [],
      page: "1",
      numPages: "0",
      searchString: ""
    };
  }

  getPlanetsList = () => {
    this.setState({planets: []})
    fetch(`https://swapi.co/api/planets?page=${this.state.page}&search=${this.state.searchString}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        const numPages = Math.ceil(data.count / 10);
        this.setState({ planets: data.results, numPages });
      });
  };

  componentDidMount() {
    this.getPlanetsList();
  }

  handlePageChange = page => async () => {
    await Promise.resolve(this.setState({ page: `${page}` }));
    this.getPlanetsList();
  };

  handleSearch = async e => {
    await Promise.resolve(this.setState({page: "1", searchString: e.target.value}));
    this.getPlanetsList();
  };

  render() {
    return (
      <div className="resource">
        <h1 className="resource-title">Planets</h1>
        <Search onChange={this.handleSearch} />
        <ListResource
          resourceName={"planets"}
          resource={this.state.planets}
          {...this.state}
          onClick={this.handlePageChange}
        />
      </div>
    );
  }
}

export default ListPlanetsContainer;
