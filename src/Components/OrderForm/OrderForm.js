import React from 'react';
import PropTypes from 'prop-types';
import {
  Form, Row, Col, Button,
} from 'antd';

import getFieldsHelper from './getFieldsHelper';

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
    <Form className="ant-advanced-search-form" onSubmit={handleSearch}>
      <Row gutter={18}>{getFieldsHelper(form.getFieldDecorator)}</Row>
      <Row>
        <Col span={18} style={{ textAlign: 'right' }}>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
          <Button style={{ marginLeft: 8 }} onClick={handleReset}>
            Clear
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

OrderForm.propTypes = {
  form: PropTypes.object.isRequired,
};

export default Form.create({ name: 'advanced_search' })(OrderForm);
