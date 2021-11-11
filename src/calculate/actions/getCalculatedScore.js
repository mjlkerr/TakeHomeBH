export const GET_CALCULATED_SCORE_SUCCESS = 'GET_CALCULATED_SCORE_SUCCESS';
export const GET_CALCULATED_SCORE_FAILURE = 'GET_CALCULATED_SCORE_FAILURE';
export const GET_CALCULATED_SCORE_REQUEST = 'GET_CALCULATED_SCORE_REQUEST';

export const getCalculatedScore = (durationInBed, durationAsleep) => {
  const score = 100 * (durationInBed / durationAsleep);

  return async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_CALCULATED_SCORE_REQUEST,
      });

      //doing a POST to a test api, would do real post here with our data
      await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then(response => response.json())
        .then(json => console.log(json));

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
