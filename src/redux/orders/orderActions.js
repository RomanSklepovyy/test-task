import * as types from './orderActionTypes';

export const getOrdersAction = () => ({ type: types.GET_ORDERS_REQUEST });
export const getOrdersSuccessAction = (payload) => ({ type: types.GET_ORDERS_SUCCESS, payload });

export const updateOrderAction = (payload) => ({
  type: types.UPDATE_ORDER_REQUEST, payload,
});
export const updateOrdersSuccessAction = (payload) => ({
  type: types.UPDATE_ORDER_SUCCESS, payload,
});

export const deleteOrdersAction = (payload) => ({
  type: types.DELETE_ORDER_REQUEST, payload,
});

export const deleteOrdersSuccessAction = (payload) => ({
  type: types.DELETE_ORDER_SUCCESS, payload,
});

export const setOrderError = (payload) => ({ type: types.ORDER_ERROR, payload });
