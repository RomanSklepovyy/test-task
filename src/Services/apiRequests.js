import API from './API';

export const login = (email, password) => (
  API.post('/users/login', {
    email,
    password,
  })
);

export const register = (fullName, email, password) => (
  API.post('/users/signup', {
    fullName,
    email,
    password,
  })
);

export const logout = (token) => (
  API.post('/users/logout', {}, {
    headers: { Authorization: `Bearer ${token}` },
  })
);
