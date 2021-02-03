import axios from 'axios';
import { getAccessToken } from '../authServices/tokenHelper';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  responseType: 'json',
});

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
