import * as types from './authActionTypes';

export const userLoadingAction = () => ({ type: types.USER_LOADING });

export const loginSuccessAction = (user, token, refreshToken) => ({
  type: types.LOGIN_SUCCESS,
  payload: { user, token, refreshToken },
});

export const registerSuccessAction = (user, token, refreshToken) => ({
  type: types.REGISTER_SUCCESS,
  payload: { user, token, refreshToken },
});

export const loginFailureAction = () => ({ type: types.LOGIN_FAILURE });

export const registerFailureAction = () => ({ type: types.REGISTER_FAILURE });

export const authErrorAction = () => ({ type: types.AUTH_ERROR });

export const logoutAction = () => ({ type: types.LOGOUT });
