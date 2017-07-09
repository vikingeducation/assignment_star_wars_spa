import { connect } from "react-redux";
import {
  getNewPage
} from "../actions";
import Pagination from '../components/Pagination';


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onNextPage: (e) => {
      e.preventDefault();
      dispatch(getNewPage("next", ownProps.type));
    },
    onPrevPage: (e) => {
      e.preventDefault();
      if (ownProps.page > 1) {
        dispatch(getNewPage("prev", ownProps.type));
      }
    }
  };
};

const PaginationContainer = connect(null, mapDispatchToProps)(
  Pagination
);

export default PaginationContainer;