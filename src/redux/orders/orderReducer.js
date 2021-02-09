import * as types from './orderActionTypes';

const initialState = {
  // list: {},
  // ids: [],
  count: 0,
  orders: [],
  error: '',
  isLoading: false,
  selected: [],
  updatingOrder: null,
};

const orderReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SET_TABLE_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case types.SET_UPDATING_ORDER:
      return {
        ...state,
        updatingOrder: payload.order,
      };
    case types.REMOVE_UPDATING_ORDER:
      return {
        ...state,
        updatingOrder: null,
      };
    case types.GET_ORDERS_SUCCESS:
      return {
        ...state,
        count: payload.count,
        isLoading: false,
        orders: payload.orders,
      };
    case types.CREATE_ORDER_SUCCESS:
      return {
        ...state,
        count: state.order.count + 1,
        orders: [payload.order, ...state.order.orders],
        // orders: {
        //   ...state.order.orders,
        //   [payload.order._id]: payload.order,
        // },
        isLoading: false,
      };
    case types.DELETE_ORDERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        count: state.count - state.selected.length,
        orders: state.orders.reduce(
          (acc, order) => (state.selected.includes(order._id) ? acc : [...acc, order]), [],
        ),
      };
    case types.UPDATE_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        updatingOrder: null,
        orders: state.order.orders.map((order) => (
          order._id === action.payload.order._id
            ? payload.order
            : order
        )),
      };
    case types.ORDER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };
    case types.SET_ORDERS_ID_TO_SELECTED:
      return {
        ...state,
        selected: payload.selected,
      };
    default:
      return state;
  }
};

export default orderReducer;
