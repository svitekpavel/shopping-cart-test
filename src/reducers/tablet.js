import * as actionTypes from '../actionTypes';

const defaultState = {
  step: 'loading',
  recording: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SWITCH_STEP:
      return {
        ...state,
        step: action.payload.step,
      };
    case actionTypes.START_RECORDING:
      return {
        ...state,
        recording: true,
      };
    case actionTypes.STOP_RECORDING:
      return {
        ...state,
        recording: false,
      };
    default:
      return state;
  }
};
