import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import OrderForm from '../OrderForm/OrderForm';
import FormHeader from '../../styles/formHeader';
import { createOrderWithFormData } from '../../services/OrderServices/createOrderWithFormData';
import { updateOrderThunk } from '../../redux/orders/orderThunks';

const UpdateOrderForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const updatingOrder = useSelector((state) => state.order.list[id]);

  const handleSubmit = (values) => {
    const order = createOrderWithFormData(values);
    order._id = updatingOrder._id;
    dispatch(updateOrderThunk(order));
    history.push('/orders');
  };

  return (
    <>
      <FormHeader>
        Update order:
      </FormHeader>
      <OrderForm handleSubmit={handleSubmit} order={updatingOrder} />
    </>
  );
};

export default UpdateOrderForm;
