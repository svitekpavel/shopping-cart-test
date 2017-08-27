import * as actionTypes from '../actionTypes';

const defaultState = [
  {
    name: 'Apple',
  },
  {
    name: 'Apple',
  },
  {
    name: 'Banana',
  },
  {
    name: 'Orange',
  },
  {
    name: 'Orange',
  },
];

export default (state = defaultState, action) => {
    switch (action.type) {
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
