import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Starships.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import { Link } from 'react-router-dom';
import Starship from '../../components/Starship';
import ReactLoading from 'react-loading';

class Starships extends Component {
  constructor() {
    super();

    this.state = {
      currentPage: 1
    };
  }

  componentDidMount() {
    const { starshipReducer, actions } = this.props;
    if (!starshipReducer.starships.length) {
      actions.getCurrentStarships(this.state.currentPage);
    }
  }

  onClickNextPage = e => {
    const { starshipReducer, actions } = this.props;
    let copy = Object.assign({}, this.state);
    copy.currentPage = copy.currentPage + 1;

    this.setState({
      currentPage: copy.currentPage
    });

    actions.getCurrentStarships(copy.currentPage);
  };

  onClickPreviousPage = e => {
    const { starshipReducer, actions } = this.props;
    let copy = Object.assign({}, this.state);
    copy.currentPage = copy.currentPage - 1;

    this.setState({
      currentPage: copy.currentPage
    });

    actions.getCurrentStarships(copy.currentPage);
  };

  render() {
    const { isFetching, starships } = this.props.starshipReducer;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Starships from Star Wars API</h2>
        </div>
        <div className="router-link-container">
          <div className="router-link-container">
            <Link to="/">Home</Link>
            <br />
          </div>
        </div>

        <div className="router-link-container">
          <div className="router-link-container">
          {this.state.currentPage>1 ? <div className="router-link"><a onClick={this.onClickPreviousPage}> Previous Page </a></div> : ''}
          {this.state.currentPage < 3 ? <div className="router-link"><a onClick={this.onClickNextPage}> Next Page </a></div> : ''}
            
          </div>
        </div>        
        <div className="router-link-container">

          {isFetching
            ? <div className="loading-icon">
                <ReactLoading type="cylon" color="#444" />
              </div>
            : starships.map(starship =>
                <div className="router-link">
                  <Link
                    to={{
                      pathname: `/Starships/${starship.name}`,
                      state: {
                        ...starship
                      }
                    }}
                    key={starship.name}
                  >
                    {' '}{starship.name}{' '}
                  </Link>
                </div>
              )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions.starshipActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Starships);
