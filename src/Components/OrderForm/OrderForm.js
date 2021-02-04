import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  Form, Row, Col, Button,
} from 'antd';
import getAddressFields from './helpers/getAddressFieldsHelper';
import getOrderFieldsHelper from './helpers/getOrderFieldsHelper';
import getLineItemsFields from './helpers/getLineItemsFields';
import { StyledOrderForm, StyledSpan } from '../../Styles/orderForm';
import { createOrderWithFormData } from '../../Services/OrderServices/createOrderWithFormData';
import { createOrderThunk } from '../../redux/orders/orderThunks';

const OrderForm = ({ form }) => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();

    form.validateFields((err, values) => {
      const order = createOrderWithFormData(values);
      console.log('object from form: ', order);
      dispatch(createOrderThunk(order));
    });
  };

  const handleReset = () => {
    form.resetFields();
  };

  return (
    <StyledOrderForm onSubmit={handleSearch}>
      <StyledSpan>Order info:</StyledSpan>
      <Row gutter={24}>{getOrderFieldsHelper(form)}</Row>
      <StyledSpan>Line item info:</StyledSpan>
      <Row gutter={24}>{getLineItemsFields(form)}</Row>
      <StyledSpan>Address info:</StyledSpan>
      <Row gutter={24}>{getAddressFields(form)}</Row>
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
};

export default Form.create({ name: 'advanced_search' })(OrderForm);
