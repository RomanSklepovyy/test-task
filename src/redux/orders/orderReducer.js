import * as types from './orderActionTypes';

const initialState = {
  orders: [],
  error: '',
  isLoading: false,
  selected: [],
  updatingOrder: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_TABLE_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case types.SET_UPDATING_ORDER:
      return {
        ...state,
        updatingOrder: action.payload.order,
      };
    case types.REMOVE_UPDATING_ORDER:
      return {
        ...state,
        updatingOrder: null,
      };
    case types.GET_ORDERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        orders: action.payload.orders,
      };
    case types.CREATE_ORDER_SUCCESS:
      return {
        ...state,
        orders: state.order.orders.unshift(action.payload.order),
        isLoading: false,
      };
    case types.DELETE_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        orders: state.order.orders.filter((order) => order._id !== action.payload._id),
      };
    case types.UPDATE_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        updatingOrder: null,
        orders: state.order.orders.map((order) => (
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
    case types.ADD_ORDER_ID_TO_SELECTED:
      return {
        ...state,
        selected: state.order.selected.push(action.payload._id),
      };
    case types.REMOVE_ORDER_ID_FROM_SELECTED:
      return {
        ...state,
        selected: state.order.selected.filter((selected) => selected !== action.payload._id),
      };
    case types.CLEAR_SELECTED:
      return {
        ...state,
        selected: [],
      };
    default:
      return state;
  }
};

export default orderReducer;
