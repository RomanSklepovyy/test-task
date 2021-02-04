import { Col, Form, Input } from 'antd';
import React from 'react';

const getOrderFields = (form) => {
  const orderFields = ['status', 'description'];
  const children = [];

  for (let i = 0; i < orderFields.length; i += 1) {
    children.push(
      <Col span={8} key={i} style={{ display: 'block' }}>
        <Form.Item label={orderFields[i]}>
          {form.getFieldDecorator(orderFields[i], {
            rules: [
              {
                required: true,
                message: 'Wrong input!',
              },
            ],
          })(<Input />)}
        </Form.Item>
      </Col>,
    );
  }
  return children;
};

export default getOrderFields;
