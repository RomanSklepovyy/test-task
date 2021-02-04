import { Col, Form, Input } from 'antd';
import React from 'react';

const getAddressFields = (form, order) => {
  const addressFields = ['Name', 'phone', 'email', 'company', 'address1',
    'address2', 'address3', 'city', 'country', 'state', 'zip'];
  const addressNames = ['fullName', 'phone', 'email', 'company', 'address1',
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
        <Form.Item label={addressFields[i]} name={addressNames[i]}>
          {form.getFieldDecorator(addressNames[i], {
            getValueFromEvent: (e) => {
              if (type === 'string' || type === 'email') return e.currentTarget.value;
              const convertedValue = Number(e.currentTarget.value);
              if (isNaN(convertedValue)) {
                return e.currentTarget.value.toString().slice(0, -1);
              }
              return convertedValue;
            },
            initialValue: order && order.orderedBy[addressNames[i]],
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
