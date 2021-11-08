export const SET_ASLEEP_MINUTES = 'SET_ASLEEP_MINUTES';
export const SET_IN_BED_MINUTES = 'SET_IN_BED_MINUTES';

export const setMinutes = (label, minutes) => {
  if (label === 'in_bed') {
    return {
      type: SET_IN_BED_MINUTES,
      minutesInBed: minutes,
    };
  }
  return {
    type: SET_ASLEEP_MINUTES,
    minutesAsleep: minutes,
  };
};
