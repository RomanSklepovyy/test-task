import {
  userLoadingAction,
  userLoadingFailureAction,
  userLoadingSuccessAction,
}
  from './authActions';
import * as authAPI from '../../Services/apiServices/authApiRequests';

export const loginUser = ({ email, password }) => async (dispatch) => {
  try {
    dispatch(userLoadingAction());
    const res = await authAPI.login(email, password);
    console.log(res);
    dispatch(userLoadingSuccessAction(res.data.user, res.data.token, res.data.refreshToken));
  } catch (error) {
    dispatch(userLoadingFailureAction());
  }
};

export const registerUser = ({ fullName, email, password }) => async (dispatch) => {
  try {
    dispatch(userLoadingAction());
    const res = await authAPI.register(fullName, email, password);
    console.log(res);
    dispatch(userLoadingSuccessAction(res.data.user, res.data.token, res.data.refreshToken));
  } catch (e) {
    dispatch(userLoadingFailureAction());
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    await authAPI.logout();
    dispatch(logoutUser());
  } catch (e) {
    console.log(e);
  }
};
