import * as actionTypes from '../actionTypes';

export default (state = [], action) => {
    switch (payload.type) {
        case actionTypes.ADD_ITEM:
            return [
              ...state,
              action.payload,
            ];
        case actionTypes.REMOVE_ITEM:
          return state.filter(item => item.id !== action.payload.id);
        default:
            return state;
    }
};
