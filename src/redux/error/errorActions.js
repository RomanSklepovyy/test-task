import * as types from './authActionTypes';

export const getErrorsAction = (message, status, id) => ({
  type: types.GET_ERRORS,
  payload: { message, status, id },
});

export const clearErrors = () => ({ type: types.CLEAR_ERRORS });
