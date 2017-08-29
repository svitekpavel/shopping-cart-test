import * as actionTypes from '../actionTypes';

export const switchStep = (step) => {
  return {
    type: actionTypes.SWITCH_STEP,
    payload: {
      step,
    },
  };
};

export const startRecording = () => {
  return {
    type: actionTypes.START_RECORDING,
  };
};

export const stopRecording = () => {
  return {
    type: actionTypes.STOP_RECORDING,
  };
};
