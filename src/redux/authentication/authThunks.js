import {
  userLoadingAction,
  userLoadingFailureAction,
  userLoadingSuccessAction,
}
  from './authActions';
import * as API from '../../Services/apiRequests';

export const loginUser = ({ email, password }) => async (dispatch) => {
  try {
    dispatch(userLoadingAction());
    const res = await API.login(email, password);
    dispatch(userLoadingSuccessAction(res.data.user, res.data.token, res.data.refreshToken));
  } catch (error) {
    dispatch(userLoadingFailureAction());
  }
};

export const registerUser = ({ fullName, email, password }) => async (dispatch) => {
  try {
    dispatch(userLoadingAction());
    const res = await API.register(fullName, email, password);
    dispatch(userLoadingSuccessAction(res.data.user, res.data.token, res.data.refreshToken));
  } catch (e) {
    dispatch(userLoadingFailureAction());
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    await API.logout(token);
    dispatch(logoutUser());
  } catch (e) {
    console.log(e);
  }
};
