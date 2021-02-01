import * as types from './authActionTypes';

export const loginAction = () => ({ type: types.LOGIN_REQUEST });

export const registerAction = () => ({ type: types.REGISTER_REQUEST });

export const logoutAction = () => ({ type: types.LOGOUT });
