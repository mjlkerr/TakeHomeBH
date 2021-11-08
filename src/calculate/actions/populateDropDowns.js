export const POPULATE_DROPDOWN_SUCCESS = 'POPULATE_DROPDOWN_SUCCESS';
export const POPULATE_DROPDOWN_FAILURE = 'POPULATE_DROPDOWN_FAILURE';
export const POPULATE_DROPDOWN_REQUEST = 'POPULATE_DROPDOWN_REQUEST';

export const populateDropDowns = () => {
  const totalMinutes = 1440;
  const timesArray = [];

  for (let minutes = 0; minutes <= totalMinutes; minutes = minutes + 30) {
    timesArray.push({label: `${minutes} Minutes`, value: minutes});
  }

  return {
    type: POPULATE_DROPDOWN_SUCCESS,
    times: timesArray,
  };
};
