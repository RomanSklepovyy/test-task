import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'antd';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import OrdersTable from './OrdersTable/OrdersTable';
import { deleteOrdersThunk } from '../../redux/orders/orderThunks';

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
  const [selected, setSelected] = useState([]);

  const handleCreateClick = () => {
    history.push('/orders/create');
  };

  const handleSelected = (selectedFields) => {
    setSelected(selectedFields);
  };

  const handleDeleteClick = async () => {
    if (selected.length) {
      await dispatch(deleteOrdersThunk(selected));
      setSelected([]);
      history.go(0);
    }
  };

  return (
    <>
      <ButtonContainer>
        <ActionButton onClick={handleCreateClick} type="primary">Create order</ActionButton>
        <ActionButton onClick={handleDeleteClick}>Delete selected</ActionButton>
      </ButtonContainer>
      <OrdersTable selected={selected} handleSelected={handleSelected} />
    </>
  );
};

export default Order;
