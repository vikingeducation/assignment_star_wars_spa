import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, InputGroup, InputGroupButton } from 'reactstrap';

const SearchForm = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <div className="SearchForm container">
        <div className="row justify-content-center">
          <InputGroup className="col-md-6 SearchInputGroup">
            <Input name="search_query" placeholder="&#xF002;" className="SearchInput" />
            <InputGroupButton outline>Search</InputGroupButton>
          </InputGroup>
        </div>
      </div>
    </Form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default SearchForm;
