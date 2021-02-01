import { combineReducers } from 'redux';
import authReducer from './authentication/authReducer';

const rootReducer = combineReducers({
  authentication: authReducer,
});

export default rootReducer;
