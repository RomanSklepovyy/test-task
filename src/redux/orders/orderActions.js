import * as types from './orderActionTypes';

export const setTableLoading = () => ({ type: types.SET_TABLE_LOADING });

export const getOrdersSuccessAction = (payload) => ({ type: types.GET_ORDERS_SUCCESS, payload });

export const setUpdatingOrder = (payload) => ({ type: types.SET_UPDATING_ORDER, payload });

export const removeUpdatingOrder = () => ({ type: types.REMOVE_UPDATING_ORDER });

export const createOrdersSuccessAction = (payload) => ({
  type: types.UPDATE_ORDER_SUCCESS, payload,
});

export const updateOrderSuccessAction = (payload) => ({
  type: types.UPDATE_ORDER_SUCCESS, payload,
});

export const deleteOrdersSuccessAction = () => ({
  type: types.DELETE_ORDERS_SUCCESS,
});

export const setSelectedAction = (payload) => ({
  type: types.SET_ORDERS_ID_TO_SELECTED, payload,
});

export const setOrderError = (payload) => ({ type: types.ORDER_ERROR, payload });
