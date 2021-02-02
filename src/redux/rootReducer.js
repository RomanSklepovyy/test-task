import { combineReducers } from 'redux';
import authReducer from './authentication/authReducer';
import errorReducer from './error/errorReducer';

const rootReducer = combineReducers({
  authentication: authReducer,
  error: errorReducer,
});

export default rootReducer;
