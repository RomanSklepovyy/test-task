import * as orderAPI from '../../Services/apiServices/orderApiRequests';
import {
  createOrderSuccessAction, deleteOrdersSuccessAction,
  getOrdersSuccessAction, setOrderError,
  setTableLoading, updateOrderSuccessAction,
} from './orderActions';

export const getOrdersThunk = (options = {}) => async (dispatch) => {
  try {
    dispatch(setTableLoading());
    const res = await orderAPI.getOrders(options);
    const { count, orders } = res.data;
    dispatch(getOrdersSuccessAction({ count, orders }));
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
    dispatch(updateOrderSuccessAction({ order: res.data }));
  } catch (error) {
    dispatch(setOrderError(error));
  }
};

export const deleteOrdersThunk = (selected) => async (dispatch) => {
  try {
    dispatch(setTableLoading());
    await orderAPI.deleteOrders(selected);
    dispatch(deleteOrdersSuccessAction());
  } catch (error) {
    console.log(error);
    dispatch(setOrderError(error));
  }
};
