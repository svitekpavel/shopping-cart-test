import * as actionTypes from '../actionTypes';

export const switchStep = (step) => {
  return {
    type: actionTypes.SWITCH_STEP,
    payload: {
      step,
    },
  };
};
