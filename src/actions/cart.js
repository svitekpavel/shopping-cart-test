import * as actionTypes from '../actionTypes';

export const addItem = (name) => {
  return {
    type: actionTypes.ADD_ITEM,
    payload: {
      name,
    },
  };
};

export const removeItem = (name) => {
  return {
    type: actionTypes.REMOVE_ITEM,
    payload: {
      name,
    },
  };
}
