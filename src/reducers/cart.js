import * as actionTypes from '../actionTypes';
import * as utils from '../utils';

const defaultState = {
  'Apple': 2,
  'Orange': 1,
  'Banana': 0,
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEM: {
          const product = action.payload.name;
          return Object.assign({}, state, {
            [product]: utils.incrementInt(state[product]),
          });
        }
        case actionTypes.REMOVE_ITEM: {
          const product = action.payload.name;
          return Object.assign({}, state, {
            [product]: utils.decrementInt(state[product]),
          });
        }
        default:
            return state;
    }
};
