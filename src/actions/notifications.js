import uuid from 'uuid/v4';
import * as actionTypes from '../actionTypes';

export const addNotification = (text, timeout = 1500) => {
  return (dispatch) => {
    const id = uuid();

    dispatch(createAddNotification(text, id));
    setTimeout(() => dispatch(createRemoveNotification(id)), timeout);
  }
};

export const createAddNotification = (text, id) => {
  return {
    type: actionTypes.ADD_NOTIFICATION,
    payload: {
      id: id || uuid(),
      text,
    },
  }
}

export const createRemoveNotification = (id) => {
  return {
    type: actionTypes.REMOVE_NOTIFICATION,
    payload: {
      id,
    },
  };
}
