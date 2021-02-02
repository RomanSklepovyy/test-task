import API from './API';

export const login = (email, password) => (
  API.post('/users/login', {
    email,
    password,
  })
);
