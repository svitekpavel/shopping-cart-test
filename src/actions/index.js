import uuid from 'uuid/v4';
import * as actionTypes from '../actionTypes';

export const addItem = ({ product, price, discount }) => {
  return {
    type: actionTypes.ADD_ITEM,
    payload: {
      id: uuid(),
      product,
      price,
      discount,
    },
  };
};

export const removeItem = (id) => {
  return {
    type: actionTypes.REMOVE_ITEM,
    payload: {
      id,
    },
  };
}
