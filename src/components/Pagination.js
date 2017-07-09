import React from 'react';
import {Col, Row, Button} from 'react-bootstrap';

const Pagination = ({onNextPage, onPrevPage, page}) => {
  return (
    <Row>
      <Col md={3}>
        <Button onClick={onPrevPage} bsStyle="primary">Prev</Button>
      </Col>
      <Col md={4} mdOffset={1}>
        <h3 className="page-number">Page: {page}</h3>
      </Col>
      <Col md={3} mdOffset={1}>
        <Button onClick={onNextPage} bsStyle="primary">Next</Button>
      </Col>
    </Row>
  );
};

export default Pagination;