import apiHelper from './apiHelper';

export const getOrders = ({
  sortField, sortType, limit = 8, skip = 0,
}) => {
  const params = {
    limit,
    skip,
  };

  if (sortField && sortType) {
    params.sortBy = `${sortField}:${sortType}`;
  }

  return apiHelper.requestWithAuth({
    url: '/orders',
    method: 'get',
    params,
  });
};

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

export const deleteOrders = (selected) => (
  apiHelper.requestWithAuth({
    url: '/orders',
    method: 'delete',
    data: {
      selected,
    },
  }));
