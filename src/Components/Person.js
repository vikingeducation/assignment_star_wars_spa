import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch
} from 'react-router-dom';

const Person = ({ person }) => {
  return (
    <div>
      <div className="row">
        <div className="card col-md-5 grid Film">
          <h4>{person.name}</h4>
          <p>Films: {person.films}</p>
          <p>
            : <br />
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Person;
