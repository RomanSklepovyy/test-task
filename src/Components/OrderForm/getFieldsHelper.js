import { Col, Form, Input } from 'antd';
import React from 'react';

const getFields = (getFieldDecorator) => {
  const addressFields = ['Name', 'company', 'address1', 'address2', 'address3',
    'city', 'state', 'zip', 'country', 'phone', 'email'];
  const children = [];

  for (let i = 0; i < addressFields.length; i += 1) {
    children.push(
      <Col span={6} key={i} style={{ display: 'block' }}>
        <Form.Item label={addressFields[i]}>
          {getFieldDecorator(addressFields[i], {
            rules: [
              {
                required: true,
                message: 'Input something!',
              },
            ],
          })(<Input />)}
        </Form.Item>
      </Col>,
    );
  }
  return children;
};

export default getFields;
