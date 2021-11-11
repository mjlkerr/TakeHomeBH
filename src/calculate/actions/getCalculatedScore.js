export const GET_CALCULATED_SCORE_SUCCESS = 'GET_CALCULATED_SCORE_SUCCESS';
export const GET_CALCULATED_SCORE_FAILURE = 'GET_CALCULATED_SCORE_FAILURE';
export const GET_CALCULATED_SCORE_REQUEST = 'GET_CALCULATED_SCORE_REQUEST';

export const getCalculatedScore = (durationInBed, durationAsleep) => {
  const score = 100 * (durationInBed / durationAsleep);
  const delay = ms => new Promise(res => setTimeout(res, ms));

  return async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_CALCULATED_SCORE_REQUEST,
      });

      await delay(3000);

      dispatch({
        type: GET_CALCULATED_SCORE_SUCCESS,
        score: score,
      });
    } catch {
      dispatch({
        type: GET_CALCULATED_SCORE_FAILURE,
      });
    }
  };
};
