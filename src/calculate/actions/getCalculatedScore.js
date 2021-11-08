export const GET_CALCULATED_SCORE_SUCCESS = 'GET_CALCULATED_SCORE_SUCCESS';
export const GET_CALCULATED_SCORE_FAILURE = 'GET_CALCULATED_SCORE_FAILURE';
export const GET_CALCULATED_SCORE_REQUEST = 'GET_CALCULATED_SCORE_REQUEST';

export const getCalulatedScore = (durationInBed, durationAsleep) => {
  const score = 100 * (durationInBed / durationAsleep);
  return {
    type: GET_CALCULATED_SCORE_SUCCESS,
    score: score,
  };
};
