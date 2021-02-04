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

export const deleteOrdersSuccessAction = (payload) => ({
  type: types.DELETE_ORDER_SUCCESS, payload,
});

export const addIdToSelectedAction = (payload) => ({
  type: types.ADD_ORDER_ID_TO_SELECTED, payload,
});

export const removeIdFromSelectedAction = (payload) => ({
  type: types.REMOVE_ORDER_ID_FROM_SELECTED, payload,
});

export const clearSelected = (payload) => ({
  type: types.CLEAR_SELECTED, payload,
});

export const setOrderError = (payload) => ({ type: types.ORDER_ERROR, payload });
