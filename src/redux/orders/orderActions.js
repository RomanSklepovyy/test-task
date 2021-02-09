import * as types from './orderActionTypes';

export const setTableLoading = () => ({ type: types.SET_TABLE_LOADING });

export const getOrdersAction = (payload) => ({ type: types.GET_ORDERS, payload });

export const setUpdatingOrder = (payload) => ({ type: types.SET_UPDATING_ORDER, payload });

export const removeUpdatingOrder = () => ({ type: types.REMOVE_UPDATING_ORDER });

export const createOrderSuccessAction = (payload) => ({
  type: types.CREATE_ORDER, payload,
});

export const updateOrderAction = (payload) => ({
  type: types.UPDATE_ORDER, payload,
});

export const deleteOrdersAction = (payload) => ({
  type: types.DELETE_ORDERS, payload,
});

export const setOrderError = (payload) => ({ type: types.ORDER_ERROR, payload });
