import * as types from './authActionTypes';

export const userLoadingAction = () => ({ type: types.USER_LOADING });

export const userLoadingSuccessAction = (user, token, refreshToken) => ({
  type: types.USER_LOADING_SUCCESS,
  payload: { user, token, refreshToken },
});

export const userLoadingFailureAction = () => ({ type: types.USER_LOADING_FAILURE });

export const authErrorAction = () => ({ type: types.AUTH_ERROR });

export const logoutAction = () => ({ type: types.LOGOUT });
