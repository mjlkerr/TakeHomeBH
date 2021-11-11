export const POPULATE_DROPDOWN_SUCCESS = 'POPULATE_DROPDOWN_SUCCESS';
export const POPULATE_DROPDOWN_FAILURE = 'POPULATE_DROPDOWN_FAILURE';
export const POPULATE_DROPDOWN_REQUEST = 'POPULATE_DROPDOWN_REQUEST';

export const populateDropDowns = () => {
  const totalMinutes = 1440;
  const timesArray = [];

  //I would make a call to get our values here, but for let's fake it.

  return async (dispatch, getState) => {
    try {
      dispatch({
        type: POPULATE_DROPDOWN_REQUEST,
      });

      for (let minutes = 0; minutes <= totalMinutes; minutes = minutes + 30) {
        let hours = Math.floor(minutes / 60);
        if (minutes % 60 === 30 && minutes > 30) {
          timesArray.push({
            label: `${hours} Hours and 30 Minutes`,
            value: minutes,
          });
        } else if (minutes % 60 === 0 && minutes > 30) {
          timesArray.push({label: `${hours} Hours`, value: minutes});
        } else {
          timesArray.push({
            label: `${minutes} Minutes`,
            value: minutes,
          });
        }
      }
      dispatch({
        type: POPULATE_DROPDOWN_SUCCESS,
        times: timesArray,
      });
    } catch {
      dispatch({
        type: POPULATE_DROPDOWN_FAILURE,
      });
    }
  };
};
