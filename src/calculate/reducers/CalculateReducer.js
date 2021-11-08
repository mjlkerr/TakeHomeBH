import {
  POPULATE_DROPDOWN_SUCCESS,
  POPULATE_DROPDOWN_FAILURE,
  POPULATE_DROPDOWN_REQUEST,
} from '../actions/populateDropDowns';

const INITIAL_STATE = {
  times: [],
  isLoading: false,
};

const calculateReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POPULATE_DROPDOWN_SUCCESS:
      return {
        ...state,
        times: action.times,
        isLoading: false,
      };
    case POPULATE_DROPDOWN_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case POPULATE_DROPDOWN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default calculateReducer;
