import apiHelper from './apiHelper';

export const getOrders = () => (
  apiHelper.requestWithAuth({
    url: '/orders',
    method: 'get',
  }));

export const createOrder = (order) => (
  apiHelper.requestWithAuth({
    url: '/orders',
    method: 'post',
    data: order,
  }));
