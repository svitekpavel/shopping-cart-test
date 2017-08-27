import * as actionTypes from '../actionTypes';

const defaultState = [
  {
    id: '1225b4e9-256d-43a1-8e70-980eb1857d03',
    text: 'Apple added.',
  },
  {
    id: '2225b4e9-256d-43a1-8e70-980eb1857d03',
    text: 'Banana added.',
  },
];

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
