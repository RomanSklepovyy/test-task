import * as types from './orderActionTypes';
import deleteObjectKeys from '../../utils/deleteObjectKeys';

const initialState = {
  list: {},
  ids: [],
  error: '',
  isLoading: false,
  total: 0,
};

const orderReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.CREATE_ORDER:
      return {
        ...state,
        list: {
          ...state.order.list,
          [payload.order._id]: payload.order,
        },
        ids: [...state.order.ids, payload.order._id],
        isLoading: false,
        total: state.order.total + 1,
      };
    case types.GET_ORDERS:
      return {
        ...state,
        list: payload.orders.list,
        ids: payload.orders.ids,
        isLoading: false,
        total: payload.total,
      };
    case types.UPDATE_ORDER:
      return {
        ...state,
        list: {
          [payload.order._id]: payload.order,
        },
        isLoading: false,
      };
    case types.DELETE_ORDERS:
      return {
        ...state,
        ids: [...state.order.ids].filter((id) => !payload.ids.includes(id)),
        list: deleteObjectKeys(state.order.list, payload.ids),
        isLoading: false,
        total: state.order.total - payload.ids.length,
      };
    case types.ORDER_ERROR:
      return {
        ...state,
        error: payload.error,
      };
    case types.SET_TABLE_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default: return state;
  }
};

export default orderReducer;
