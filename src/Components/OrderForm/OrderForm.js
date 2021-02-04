import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Form, Row, Col, Button,
} from 'antd';
import getAddressFields from './helpers/getAddressFieldsHelper';
import getOrderFieldsHelper from './helpers/getOrderFieldsHelper';
import getLineItemsFields from './helpers/getLineItemsFields';

const StyledOrderForm = styled(Form)`
  padding: 24px;
  background: #fbfbfb;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
`;

const StyledSpan = styled.div`
  font-weight: bolder;
  font-size: 18px;
  margin-bottom: 20px;
`;

const OrderForm = ({ form }) => {
  const handleSearch = (e) => {
    e.preventDefault();

    form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
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
