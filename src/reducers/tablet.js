import * as actionTypes from '../actionTypes';

const defaultState = {
  step: 'loading',
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.SWITCH_STEP:
            return {
              ...state,
              step: action.payload.step,
            };
        default:
            return state;
    }
};
