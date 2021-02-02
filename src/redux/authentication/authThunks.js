import { loginFailureAction, loginSuccessAction, userLoadingAction } from './authActions';
import * as API from '../../Services/apiRequests';

export const createUser = ({ email, password }) => async (dispatch) => {
  try {
    dispatch(userLoadingAction());
    const data = await API.login(email, password).then();
    dispatch(loginSuccessAction(data.user, data.token, data.refreshToken));
    return data;
  } catch (error) {
    dispatch(loginFailureAction());
    return error;
  }
};
