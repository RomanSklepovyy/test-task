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

export const updateOrder = (order) => (
  apiHelper.requestWithAuth({
    url: `/orders/${order._id}`,
    method: 'put',
    data: order,
  }));

export const deleteOrder = (orderId) => (
  apiHelper.requestWithAuth({
    url: `/orders/${orderId}`,
    method: 'delete',
  }));
