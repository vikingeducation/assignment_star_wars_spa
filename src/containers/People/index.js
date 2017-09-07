import React, { Component } from 'react';
import logo from '../../logo.svg';
import './People.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import { Link } from 'react-router-dom';
// import { withRouter } from 'react-router';
import Person from '../../components/Person';

class People extends Component {
  componentDidMount() {
    const { peopleReducer, actions } = this.props;
    if (!peopleReducer.people.length) {
      actions.getInitialPeople();
    }
  }

  render() {
    const { isFetching, people } = this.props.peopleReducer;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to People from Star Wars API</h2>
        </div>
        <Link to="/">Home</Link>

        {isFetching
          ? <p>Fetching people...</p>
          : people.map(person =>
              <Link
                to={{
                  pathname: `/people/${person.name}`,
                  state: {
                    ...person
                  }
                }}
                key={person.name}
                title={person.name}
              >
                {' '}{person.name}{' '}
              </Link>
            )}
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions.peopleActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(People);