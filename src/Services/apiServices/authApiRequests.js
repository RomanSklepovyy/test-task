import apiHelper from './apiHelper';

export const login = (email, password) => {
  return apiHelper.request({
    url: '/auth/login',
    method: 'post',
    data: {
      email,
      password,
    },
  });
};

export const register = (fullName, email, password) => (
  apiHelper.request({
    url: '/auth/signup/',
    method: 'post',
    data: {
      fullName,
      email,
      password,
    },
  })
);

export const logout = () => (
  apiHelper.requestWithAuth({
    url: '/auth/signup/',
    method: 'post',
  })
);
