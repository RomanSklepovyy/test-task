import { Col, Form, Input } from 'antd';
import React from 'react';

const getAddressFields = (form, order) => {
  const lineItem = order ? order.lineItems[0] : null;
  if (lineItem) lineItem.itemDescription = lineItem.description;

  const itemFields = ['ID', 'quantity', 'price', 'shipping price', 'discount',
    'description'];
  const itemNames = ['productId', 'quantity', 'unitPrice', 'shippingPrice', 'discount',
    'itemDescription'];
  const children = [];

  for (let i = 0; i < itemFields.length; i += 1) {
    let type = 'number';

    if (itemFields[i] === 'description' || itemFields[i] === 'ID') {
      type = 'string';
    }

    children.push(
      <Col span={8} key={i} style={{ display: 'block' }}>
        <Form.Item label={itemFields[i]} name={itemNames[i]}>
          {form.getFieldDecorator(itemNames[i], {
            getValueFromEvent: (e) => {
              if (type === 'string') return e.currentTarget.value;
              const convertedValue = Number(e.currentTarget.value);
              if (isNaN(convertedValue)) {
                return e.currentTarget.value.toString().slice(0, -1);
              }
              return convertedValue;
            },
            initialValue: lineItem && lineItem[itemNames[i]],
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
