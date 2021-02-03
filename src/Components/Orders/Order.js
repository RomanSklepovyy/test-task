import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import OrdersTable from './OrdersTable/OrdersTable';
import { getOrdersThunk } from '../../redux/orders/orderThunks';

const Order = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrdersThunk());
  }, []);

  return (
    <OrdersTable />
  );
};

export default Order;
