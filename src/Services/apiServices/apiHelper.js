import axios from 'axios';
import mergeDeepRight from 'ramda/src/mergeDeepRight';

import { getAccessToken } from '../authServices/tokenHelper';

const axiosBaseConfig = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  responseType: 'json',
});

const apiHelper = {
  async request(config) {
    try {
      const res = await axiosBaseConfig.request(config);
      return res;
    } catch (e) {
      return { error: { message: e.message } };
    }
  },

  async requestWithAuth(config) {
    const authConfig = { headers: { Authorization: `Bearer ${getAccessToken()}` } };
    const axiosConfig = mergeDeepRight(config, authConfig);
    const res = this.request(axiosConfig);
    return res;
  },
};

export default apiHelper;
