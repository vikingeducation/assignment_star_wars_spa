import React, { Component } from 'react';
import logo from '../../logo.svg';
import './People.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import { Link } from 'react-router-dom';
import Person from '../../components/Person';
import ReactLoading from 'react-loading';

class People extends Component {
  constructor() {
    super();

    this.state = {
      currentPage: 1
    };
  }

  componentDidMount() {
    const { peopleReducer, actions } = this.props;
    if (!peopleReducer.people.length) {
      actions.getCurrentPeople(this.state.currentPage);
    }
  }

  onClickNextPage = e => {
    const { peopleReducer, actions } = this.props;
    let copy = Object.assign({}, this.state);
    copy.currentPage = copy.currentPage + 1;

    this.setState({
      currentPage: copy.currentPage
    });

    actions.getCurrentPeople(copy.currentPage);
  };

  onClickPreviousPage = e => {
    const { peopleReducer, actions } = this.props;
    let copy = Object.assign({}, this.state);
    copy.currentPage = copy.currentPage - 1;

    this.setState({
      currentPage: copy.currentPage
    });

    actions.getCurrentPeople(copy.currentPage);
  };


  render() {
    const { isFetching, people } = this.props.peopleReducer;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to People from Star Wars API</h2>
        </div>
        <div className="router-link-container">
        <div className="router-link">
        <Link to="/">Home</Link>
        </div>
        </div>


        <div className="router-link-container">
          <div className="router-link-container">
          {this.state.currentPage>1 ? <div className="router-link"><a onClick={this.onClickPreviousPage}> Previous Page </a></div> : ''}
          {this.state.currentPage < 9 ? <div className="router-link"><a onClick={this.onClickNextPage}> Next Page </a></div> : ''}
            
          </div>
        </div> 

        <div className="router-link-container">
        {isFetching
          ? <div className="loading-icon">
              <ReactLoading type="cylon" color="#444" />
            </div>
          : people.map(person =>
            <div className="router-link">
              <Link
                to={{
                  pathname: `/people/${person.name}`,
                  state: {
                    ...person
                  }
                }}
                key={person.name}
              >
                {' '}{person.name}{' '}
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
  actions: bindActionCreators(actions.peopleActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(People);
