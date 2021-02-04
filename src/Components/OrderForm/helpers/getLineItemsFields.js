import { Col, Form, Input } from 'antd';
import React from 'react';

const getAddressFields = (form) => {
  const addressFields = ['ID', 'quantity', 'price', 'shipping price', 'discount',
    'description'];
  const children = [];

  for (let i = 0; i < addressFields.length; i += 1) {
    let type = 'number';

    if (addressFields[i] === 'description') {
      type = 'string';
    }

    children.push(
      <Col span={8} key={i} style={{ display: 'block' }}>
        <Form.Item label={addressFields[i]}>
          {form.getFieldDecorator(addressFields[i], {
            getValueFromEvent: (e) => {
              if (type !== 'string') return e.currentTarget.value;
              const convertedValue = Number(e.currentTarget.value);
              if (isNaN(convertedValue)) {
                return Number(form.getFieldValue(addressFields[i]));
              }
              return convertedValue;
            },
            rules: [
              {
                type,
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

export default getAddressFields;
