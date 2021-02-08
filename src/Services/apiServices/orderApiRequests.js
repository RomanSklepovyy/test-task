import apiHelper from './apiHelper';

export const getOrders = ({
  sortField, sortType, limit = 50, skip = 0,
}) => {
  const query = {
    limit,
    skip,
  };

  if (sortField && sortType) {
    query.sortBy = `${sortField}:${sortType}`;
  } else if (sortField) {
    query.sortBy = sortField;
  }

  return apiHelper.requestWithAuth({
    url: '/orders',
    method: 'get',
    query,
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
