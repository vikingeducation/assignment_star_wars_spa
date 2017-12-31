import React from 'react';
import PropTypes from 'prop-types';
import PaginationLink from './elements/PaginationLink';
import { withRouter } from 'react-router-dom';

const Pagination = ({ resource, length, currentPage, perPage, onPageChange, searchQuery }) => {
  currentPage = parseInt(currentPage, 10);
  perPage = parseInt(perPage, 10);
  const amountOfPages = Math.ceil(length / perPage);
  const paginationLinks =[];

  const previousPage = currentPage - 1 || null;
  if (previousPage) {
    paginationLinks.push(
      <PaginationLink
        to={`/${ resource }/${ previousPage }`}
        key="previous"
        onPageChange={onPageChange}
        searchQuery={searchQuery}
      >
        {'<'}
      </PaginationLink>
    );
  }

  if (amountOfPages > 1) {
    for (var i = 1; i <= amountOfPages; i++) {
      paginationLinks.push(
        <PaginationLink
          to={`/${ resource }/${ i }`}
          key={i}
          onPageChange={onPageChange}
          searchQuery={searchQuery}
        >
          {i}
        </PaginationLink>
      );
    }
  }

  // if there is a next page
  if (currentPage + 1 <= amountOfPages) {
    paginationLinks.push(
      <PaginationLink
        to={`/${ resource }/${ currentPage + 1 }`}
        key="next"
        onPageChange={onPageChange}
        searchQuery={searchQuery}
      >
        {'>'}
      </PaginationLink>
    );
  }


  return (
    <div className="Pagination">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {paginationLinks}
        </ul>
      </nav>
    </div>
  );
};

Pagination.propTypes = {
  resource: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  currentPage: PropTypes.string.isRequired,
  perPage: PropTypes.string.isRequired,
  onPageChange: PropTypes.func,
  searchQuery: PropTypes.string
};

export default withRouter(Pagination);
