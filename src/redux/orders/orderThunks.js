import * as orderAPI from '../../Services/apiServices/orderApiRequests';
import {
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
