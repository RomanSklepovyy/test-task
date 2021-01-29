import React from 'react';
import { Table } from 'antd';

const OrderDescription = (props) => {
  // eslint-disable-next-line react/prop-types
  const { items } = props;

  const columns = [
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Product ID',
      dataIndex: 'productId',
      key: 'productId',
    },
    {
      title: 'Unit Price',
      dataIndex: 'unitPrice',
      key: 'unitPrice',
    },
    {
      title: 'Shipping Price',
      dataIndex: 'shippingPrice',
      key: 'shippingPrice',
    },
    {
      title: 'Discount',
      dataIndex: 'discount',
      key: 'discount',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={items}
        bordered
        size="small"
      />
    </div>
  );
};

export default OrderDescription;
