import { Col, Form, Input } from 'antd';
import React from 'react';

const getAddressFields = (form) => {
  const addressFields = ['Name', 'phone', 'email', 'company', 'address1',
    'address2', 'address3', 'city', 'country', 'state', 'zip'];
  const children = [];

  for (let i = 0; i < addressFields.length; i += 1) {
    let type = 'string';

    if (addressFields[i] === 'email') {
      type = 'email';
    } else if (addressFields[i] === 'zip' || addressFields[i] === 'phone') {
      type = 'number';
    }
    children.push(
      <Col span={8} key={i} style={{ display: 'block' }}>
        <Form.Item label={addressFields[i]}>
          {form.getFieldDecorator(addressFields[i], {
            getValueFromEvent: (e) => {
              if (type !== 'number') return e.currentTarget.value;
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
