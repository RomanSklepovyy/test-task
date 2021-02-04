import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'antd';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import OrdersTable from './OrdersTable/OrdersTable';
import { getOrdersThunk } from '../../redux/orders/orderThunks';

const ButtonContainer = styled.div`
  margin: 15px 0;
`;

const Order = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getOrdersThunk());
  }, []);

  const handleCreateClick = () => {
    history.push('/orders/create');
  };

  return (
    <>
      <ButtonContainer>
        <Button onClick={handleCreateClick} type="primary">Create order</Button>
      </ButtonContainer>
      <OrdersTable />
    </>
  );
};

export default Order;
