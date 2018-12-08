import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';

const PaginantionLink = ({ to, children, onPageChange, searchQuery, match }) => {
  return (
    <li className={`page-item`}>
      <NavLink
        activeClassName="active"
        isActive={() => match.url === to}
        to={{ to, search: searchQuery }}
        className="page-link"
        onClick={onPageChange}
      >
        {children}
      </NavLink>
    </li>
  );
};

PaginantionLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onPageChange: PropTypes.func,
  searchQuery: PropTypes.string,
  match: PropTypes.object.isRequired
};

export default withRouter(PaginantionLink);
