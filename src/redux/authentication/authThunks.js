import { loginSuccessAction, userLoadingAction } from './authActions';

export const loginThunk = async (dispatch, getState) => {
  dispatch(userLoadingAction());
  const sleep = (m) => new Promise((r) => setTimeout(r, m));
  await sleep(5000);
  dispatch(loginSuccessAction({ name: 'Ivan' }, 'afdfradsgesgfrsf'));
};
