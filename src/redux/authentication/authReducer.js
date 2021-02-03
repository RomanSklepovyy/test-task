import * as types from './authActionTypes';

const initialState = {
  token: localStorage.getItem('token'),
  refreshToken: localStorage.getItem('refreshToken'),
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
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('token', action.payload.refreshToken);
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload.user,
      };
    case types.USER_LOADING_FAILURE:
    case types.AUTH_ERROR:
    case types.LOGOUT:
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
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
