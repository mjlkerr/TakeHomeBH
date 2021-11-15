import {
  POPULATE_DROPDOWN_SUCCESS,
  POPULATE_DROPDOWN_FAILURE,
  POPULATE_DROPDOWN_REQUEST,
} from '../actions/populateDropDowns';

import {
  GET_CALCULATED_SCORE_SUCCESS,
  GET_CALCULATED_SCORE_REQUEST,
  GET_CALCULATED_SCORE_FAILURE,
} from '../actions/getCalculatedScore';

import {SET_ASLEEP_MINUTES, SET_IN_BED_MINUTES} from '../actions/setMinutes';

const INITIAL_STATE = {
  times: [],
  isLoading: false,
  score: 0,
  minutesInBed: 0,
  minutesAsleep: 0,
};

const calculateReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POPULATE_DROPDOWN_SUCCESS:
      return {
        ...state,
        times: action.times,
        isLoading: false,
      };
    case GET_CALCULATED_SCORE_FAILURE:
    case POPULATE_DROPDOWN_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case GET_CALCULATED_SCORE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CALCULATED_SCORE_SUCCESS:
      return {
        ...state,
        score: action.score,
        isLoading: false,
      };
    case SET_ASLEEP_MINUTES:
      return {
        ...state,
        minutesAsleep: action.minutesAsleep,
      };
    case SET_IN_BED_MINUTES:
      return {
        ...state,
        minutesInBed: action.minutesInBed,
      };
    default:
      return state;
  }
};

export default calculateReducer;
