import React from 'react';
import {
  FormControl, 
  FormGroup, 
  Button,
  Row,
  Col
} from 'react-bootstrap';

const Search = ({onSubmit}) => {
  return (
    <Row>
      <Col md={4} mdOffset={4}>
        <form onSubmit={onSubmit}>
          <FormGroup>
            <FormControl type="text" placeholder="Enter a search term here" name="search"/>
          </FormGroup>
          <FormGroup>
            <Button type="submit" bsStyle="primary" block>Search!</Button>
          </FormGroup>
        </form>
      </Col>
    </Row>
  )
};

export default Search;