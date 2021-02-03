import apiHelper from './apiHelper';

export const getOrders = () => (
  apiHelper.requestWithAuth({
    url: '/orders',
    method: 'get',
  }));
