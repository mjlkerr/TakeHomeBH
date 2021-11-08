import {POPULATE_DROPDOWN_SUCCESS} from '../actions/populateDropDowns';

const INITIAL_STATE = {
  current: [],
  possible: ['Alice', 'Bob', 'Sammy'],
};

const calculateReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POPULATE_DROPDOWN_SUCCESS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default calculateReducer;
