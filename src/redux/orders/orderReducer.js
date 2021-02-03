import * as types from './orderActionTypes';

const initialState = {
  orders: [],
  error: '',
  isLoading: false,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_TABLE_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_ORDERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        orders: action.payload.orders,
      };
    case types.DELETE_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        orders: state.orders.filter((order) => order._id !== action.payload.order._id),
      };
    case types.UPDATE_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        orders: state.orders.map((order) => (
          order._id === action.payload.order._id
            ? action.payload.order
            : order
        )),
      };
    case types.ORDER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default orderReducer;
