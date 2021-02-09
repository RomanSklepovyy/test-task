import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import OrdersTable from './OrdersTable/OrdersTable';
import { deleteOrdersThunk, getOrdersThunk } from '../../redux/orders/orderThunks';

const ButtonContainer = styled.div`
  margin: 15px 0;
  display: flex;
`;

const ActionButton = styled(Button)`
  margin-left: 15px;
`;

const Order = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const selected = useSelector((state) => state.order.selected);

  const handleCreateClick = () => {
    history.push('/orders/create');
  };

  const handleDeleteClick = () => {
    if (selected.length) {
      dispatch(deleteOrdersThunk(selected));
    }
  };

  return (
    <>
      <ButtonContainer>
        <ActionButton onClick={handleCreateClick} type="primary">Create order</ActionButton>
        <ActionButton onClick={handleDeleteClick}>Delete selected</ActionButton>
      </ButtonContainer>
      <OrdersTable />
    </>
  );
};

export default Order;
