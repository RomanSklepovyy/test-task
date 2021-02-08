import * as orderAPI from '../../Services/apiServices/orderApiRequests';
import {
  createOrdersSuccessAction, deleteOrdersSuccessAction,
  getOrdersSuccessAction, setOrderError,
  setTableLoading, updateOrderSuccessAction,
} from './orderActions';

export const getOrdersThunk = () => async (dispatch) => {
  try {
    dispatch(setTableLoading());
    const res = await orderAPI.getOrders();
    dispatch(getOrdersSuccessAction({ orders: res.data.orders }));
  } catch (error) {
    dispatch(setOrderError(error));
  }
};

export const createOrderThunk = (order) => async (dispatch) => {
  try {
    dispatch(setTableLoading());
    const res = await orderAPI.createOrder(order);
    dispatch(createOrdersSuccessAction({ order: res.data }));
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
    console.log('hello');
    dispatch(setTableLoading());
    await orderAPI.deleteOrders(selected);
    dispatch(deleteOrdersSuccessAction());
  } catch (error) {
    dispatch(setOrderError(error));
  }
};
