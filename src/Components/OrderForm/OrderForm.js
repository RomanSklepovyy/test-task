import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  Form, Row, Col, Button,
} from 'antd';
import getAddressFields from './helpers/getAddressFieldsHelper';
import getOrderFieldsHelper from './helpers/getOrderFieldsHelper';
import getLineItemsFields from './helpers/getLineItemsFields';
import { StyledOrderForm, StyledSpan } from '../../Styles/orderForm';
import { createOrderWithFormData } from '../../Services/OrderServices/createOrderWithFormData';
import { createOrderThunk } from '../../redux/orders/orderThunks';

const OrderForm = ({ form, handleSubmit }) => {
  const dispatch = useDispatch();
  const updatingOrder = useSelector((state) => state.order.updatingOrder);

  const handleCreate = (e) => {
    e.preventDefault();

    form.validateFields((err, values) => {
      if (!err) {
        handleSubmit(values);
      }
    });
  };

  const handleReset = () => {
    form.resetFields();
  };

  return (
    <StyledOrderForm onSubmit={handleCreate}>
      <StyledSpan>Order info:</StyledSpan>
      <Row gutter={24}>{getOrderFieldsHelper(form, updatingOrder)}</Row>
      <StyledSpan>Line item info:</StyledSpan>
      <Row gutter={24}>{getLineItemsFields(form, updatingOrder)}</Row>
      <StyledSpan>Address info:</StyledSpan>
      <Row gutter={24}>{getAddressFields(form, updatingOrder)}</Row>
      <Row>
        <Col span={24} style={{ textAlign: 'right' }}>
          <Button type="primary" htmlType="submit">
            Send
          </Button>
          <Button style={{ marginLeft: 8 }} onClick={handleReset}>
            Clear
          </Button>
        </Col>
      </Row>
    </StyledOrderForm>
  );
};

OrderForm.propTypes = {
  form: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form.create({ name: 'advanced_search' })(OrderForm);
