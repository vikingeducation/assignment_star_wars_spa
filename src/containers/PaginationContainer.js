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
  return {
    onNextPage: (e) => {
      e.preventDefault();
      dispatch(getNewPage("next", ownProps.type, ownProps.page));
    },
    onPrevPage: (e) => {
      e.preventDefault();
      if (ownProps.page > 1) {
        dispatch(getNewPage("prev", ownProps.type));
      }
    }
  };
};

const PaginationContainer = connect(mapStateToProps, mapDispatchToProps)(
  Pagination
);

export default PaginationContainer;