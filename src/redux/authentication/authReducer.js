import * as types from './authActionTypes';
import {
  getAccessToken,
  getRefreshToken,
  removeAccessToken,
  removeRefreshToken,
  setAccessToken,
  setRefreshToken,
} from '../../Services/authServices/tokenHelper';

const initialState = {
  token: getAccessToken(),
  refreshToken: getRefreshToken(),
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case types.USER_LOADING_SUCCESS:
      setAccessToken(action.payload.token);
      setRefreshToken(action.payload.refreshToken);
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload.user,
      };
    case types.USER_LOADING_FAILURE:
    case types.AUTH_ERROR:
    case types.LOGOUT:
      removeAccessToken();
      removeRefreshToken();
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: null,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
