import { connect } from "react-redux";
import {
  getNewPage
} from "../actions";
import Pagination from '../components/Pagination';

const mapStateToProps = (state, ownProps) => {
  return {
    page: ownProps.page
  };
};
 

const mapDispatchToProps = (dispatch, ownProps) => {
  const {type, page} = ownProps;
  return {
    onNextPage: (e) => {
      e.preventDefault();
      dispatch(getNewPage("next", type, page));
    },
    onPrevPage: (e) => {
      e.preventDefault();
      if (page > 1) {
        dispatch(getNewPage("prev", type, page));
      }
    }
  };
};

const PaginationContainer = connect(mapStateToProps, mapDispatchToProps)(
  Pagination
);

export default PaginationContainer;