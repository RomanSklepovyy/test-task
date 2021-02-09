import * as types from './authActionTypes';

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case types.USER_LOADING_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: payload.user,
      };
    case types.GET_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: payload.user,
      };
    case types.USER_LOADING_FAILURE:
    case types.AUTH_ERROR:
    case types.LOGOUT:
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
