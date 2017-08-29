import * as actionTypes from '../actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_NOTIFICATION:
            return [
              ...state,
              action.payload,
            ];
        case actionTypes.REMOVE_NOTIFICATION:
          return state.filter(item => item.id !== action.payload.id);
        default:
            return state;
    }
};
