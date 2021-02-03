import * as types from './orderActionTypes';

const initialState = {
  orders: [],
  error: '',
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.orders,
      };
    case types.DELETE_ORDER_SUCCESS:
      return {
        ...state,
        orders: state.orders.filter((order) => order._id !== action.payload.order._id),
      };
    case types.UPDATE_ORDER_SUCCESS:
      return {
        ...state,
        orders: state.orders.map((order) => (
          order._id === action.payload.order._id
            ? action.payload.order
            : order
        )),
      };
    case types.ORDER_ERROR:
      return {
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default orderReducer;
