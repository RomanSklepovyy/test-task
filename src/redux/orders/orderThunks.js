import * as orderAPI from '../../Services/apiServices/orderApiRequests';
import {
  createOrdersSuccessAction,
  getOrdersSuccessAction, setOrderError, setTableLoading,
} from './orderActions';

export const getOrdersThunk = () => async (dispatch) => {
  try {
    dispatch(setTableLoading());
    const res = await orderAPI.getOrders();
    dispatch(getOrdersSuccessAction({ orders: res.data.orders }));
    console.log(res);
  } catch (error) {
    dispatch(setOrderError(error));
  }
};

export const createOrderThunk = (order) => async (dispatch) => {
  try {
    dispatch(setTableLoading());
    const res = await orderAPI.createOrder(order);
    console.log(res);
    dispatch(createOrdersSuccessAction({ order: res.data }));
  } catch (error) {
    dispatch(setOrderError(error));
  }
};
