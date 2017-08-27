import { combineReducers } from 'redux';
import cart from './cart';
import tablet from './tablet';
import notifications from './notifications';

const rootReducer = combineReducers({
    cart,
    tablet,
    notifications,
});

export default rootReducer;
