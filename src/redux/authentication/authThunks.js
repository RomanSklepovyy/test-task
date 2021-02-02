import {
  userLoadingAction,
  userLoadingFailureAction,
  userLoadingSuccessAction,
}
  from './authActions';
import * as API from '../../Services/apiRequests';

export const createUser = ({ email, password }) => async (dispatch) => {
  try {
    dispatch(userLoadingAction());
    const data = await API.login(email, password);
    dispatch(userLoadingSuccessAction(data.data.user, data.data.token, data.data.refreshToken));
    return data;
  } catch (error) {
    dispatch(userLoadingFailureAction());
    return error;
  }
};
