import axios from 'axios';
import { getAccessToken, getRefreshToken, setAccessToken } from '../authServices/tokenHelper';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  responseType: 'json',
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;
    const refreshToken = getRefreshToken();

    if (
      refreshToken
      && error.response.status === 401
      && !originalRequest._retry
    ) {
      originalRequest._retry = true;
      return API({
        url: '/auth/token',
        method: 'post',
        headers: {
          Authorization: refreshToken,
        },
      }).then((res) => {
        if (res.status === 200) {
          setAccessToken(res.data.accessToken);
          return API(originalRequest);
        }
        return Promise.reject(error);
      });
    }
    return Promise.reject(error);
  },
);

const apiHelper = {
  async request(config) {
    try {
      const res = await API(config);
      return res;
    } catch (error) {
      return { error: { statusCode: error.response.status, message: error.message } };
    }
  },

  async requestWithAuth(config) {
    const token = getAccessToken();
    if (!token) return { error: { statusCode: 401, message: 'Unauthorized.' } };

    const authHeader = `Bearer ${token}`;

    const headers = {
      ...config.headers,
      Authorization: authHeader,
    };

    try {
      const res = await this.request({ ...config, headers });
      return res;
    } catch (e) {
      return e;
    }
  },
};

export default apiHelper;
