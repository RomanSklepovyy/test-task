import * as types from './authActionTypes';

export const loginRequest = async (dispatch, getState) => {
  const res = await setTimeout(() => ({ name: 'Ivan' }), 2000);
  dispatch({ type: types.LOGIN_SUCCESS, payload: res });
};
