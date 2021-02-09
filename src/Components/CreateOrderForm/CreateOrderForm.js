import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import OrderForm from '../OrderForm/OrderForm';
import FormHeader from '../../styles/formHeader';
import { createOrderWithFormData } from '../../services/OrderServices/createOrderWithFormData';
import { createOrderThunk } from '../../redux/orders/orderThunks';

const CreateOrderForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (values) => {
    const order = createOrderWithFormData(values);
    dispatch(createOrderThunk(order));
    history.push('/orders');
  };

  return (
    <>
      <FormHeader>
        Create order:
      </FormHeader>
      <OrderForm handleSubmit={handleSubmit} />
    </>
  );
};

export default CreateOrderForm;
