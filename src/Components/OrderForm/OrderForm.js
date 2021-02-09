import React from 'react';
import PropTypes from 'prop-types';
import {
  Form, Row, Col, Button,
} from 'antd';
import getAddressFields from './helpers/getAddressFieldsHelper';
import getOrderFieldsHelper from './helpers/getOrderFieldsHelper';
import getLineItemsFields from './helpers/getLineItemsFields';
import { StyledOrderForm, StyledSpan } from '../../styles/orderForm';

const OrderForm = ({ form, handleSubmit, order }) => {
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
      <Row gutter={24}>{getOrderFieldsHelper(form, order)}</Row>
      <StyledSpan>Line item info:</StyledSpan>
      <Row gutter={24}>{getLineItemsFields(form, order)}</Row>
      <StyledSpan>Address info:</StyledSpan>
      <Row gutter={24}>{getAddressFields(form, order)}</Row>
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
  order: PropTypes.object,
};

OrderForm.defaultProps = {
  order: null,
};

export default Form.create({ name: 'advanced_search' })(OrderForm);
