import * as orderAPI from '../../services/apiServices/orderApiRequests';
import {
  createOrderSuccessAction, deleteOrdersAction,
  getOrdersAction, setOrderError,
  setTableLoading, updateOrderAction,
} from './orderActions';
import normalizeDocs from '../../utils/normalizeDocs';

export const getOrdersThunk = (options = {}) => async (dispatch) => {
  try {
    dispatch(setTableLoading());
    const res = await orderAPI.getOrders(options);
    const { count, orders } = res.data;
    dispatch(getOrdersAction({ total: count, orders: normalizeDocs(orders) }));
  } catch (error) {
    dispatch(setOrderError(error));
  }
};

export const createOrderThunk = (order) => async (dispatch) => {
  try {
    dispatch(setTableLoading());
    const res = await orderAPI.createOrder(order);
    dispatch(createOrderSuccessAction({ order: res.data }));
  } catch (error) {
    dispatch(setOrderError(error));
  }
};

export const updateOrderThunk = (order) => async (dispatch) => {
  try {
    dispatch(setTableLoading());
    const res = await orderAPI.updateOrder(order);
    dispatch(updateOrderAction({ order: res.data }));
  } catch (error) {
    dispatch(setOrderError(error));
  }
};

export const deleteOrdersThunk = (selected) => async (dispatch) => {
  try {
    dispatch(setTableLoading());
    await orderAPI.deleteOrders(selected);
    dispatch(deleteOrdersAction({ ids: selected }));
  } catch (error) {
    console.log(error);
    dispatch(setOrderError(error));
  }
};
