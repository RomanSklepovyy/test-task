import * as types from './orderActionTypes';

export const setTableLoading = () => ({ type: types.SET_TABLE_LOADING });

export const getOrdersSuccessAction = (payload) => ({ type: types.GET_ORDERS_SUCCESS, payload });

export const updateOrdersSuccessAction = (payload) => ({
  type: types.UPDATE_ORDER_SUCCESS, payload,
});

export const deleteOrdersSuccessAction = (payload) => ({
  type: types.DELETE_ORDER_SUCCESS, payload,
});

export const setOrderError = (payload) => ({ type: types.ORDER_ERROR, payload });
