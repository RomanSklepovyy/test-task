import {
  getUser,
  userLoadingAction,
  userLoadingFailureAction,
  userLoadingSuccessAction,
}
  from './authActions';
import * as authAPI from '../../services/apiServices/authApiRequests';
import {
  removeAccessToken,
  removeRefreshToken,
  setAccessToken,
  setRefreshToken,
} from '../../services/authServices/tokenHelper';

export const loginUser = ({ email, password }) => async (dispatch) => {
  try {
    dispatch(userLoadingAction());
    const res = await authAPI.login(email, password);
    const { user, token, refreshToken } = res.data;
    setAccessToken(token);
    setRefreshToken(refreshToken);
    dispatch(userLoadingSuccessAction(user, token, refreshToken));
  } catch (error) {
    dispatch(userLoadingFailureAction());
  }
};

export const registerUser = ({ fullName, email, password }) => async (dispatch) => {
  try {
    dispatch(userLoadingAction());
    const res = await authAPI.register(fullName, email, password);
    const { user, token, refreshToken } = res.data;
    setAccessToken(token);
    setRefreshToken(refreshToken);
    dispatch(userLoadingSuccessAction(user, token, refreshToken));
  } catch (e) {
    dispatch(userLoadingFailureAction());
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    await authAPI.logout();
    removeAccessToken();
    removeRefreshToken();
    dispatch(logoutUser());
  } catch (e) {
    console.log(e);
  }
};

export const loginUserByToken = () => async (dispatch) => {
  try {
    const { data } = await authAPI.getUserByToken();
    dispatch(getUser({ user: data }));
  } catch (e) {
    console.log(e);
  }
};
