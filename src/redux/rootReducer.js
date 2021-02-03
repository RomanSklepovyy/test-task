import { combineReducers } from 'redux';
import authReducer from './authentication/authReducer';
import orderReducer from './orders/orderReducer';

const rootReducer = combineReducers({
  authentication: authReducer,
  order: orderReducer,
});

export default rootReducer;
