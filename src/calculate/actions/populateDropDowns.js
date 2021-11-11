export const POPULATE_DROPDOWN_SUCCESS = 'POPULATE_DROPDOWN_SUCCESS';
export const POPULATE_DROPDOWN_FAILURE = 'POPULATE_DROPDOWN_FAILURE';
export const POPULATE_DROPDOWN_REQUEST = 'POPULATE_DROPDOWN_REQUEST';

export const populateDropDowns = () => {
  const totalMinutes = 1440;
  const timesArray = [];
  const delay = ms => new Promise(res => setTimeout(res, ms));

  return async (dispatch, getState) => {
    try {
      dispatch({
        type: POPULATE_DROPDOWN_REQUEST,
      });

      //I would make a call to get our values here, but let's fake it.
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
      //faking waiting for the api call to return
      await delay(3000);
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
