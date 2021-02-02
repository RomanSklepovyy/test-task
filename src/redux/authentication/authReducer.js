import * as types from './authActionTypes';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: false,
  user: JSON.parse(localStorage.getItem('user')),
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOGIN_SUCCESS:
    case types.REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    case types.REGISTER_FAILURE:
    case types.LOGIN_FAILURE:
    case types.AUTH_ERROR:
    case types.LOGOUT:
      localStorage.removeItem('token');
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
