import React from 'react';
import { Table } from 'antd';
import columns from './getOrdersDescriptionColumns';

const OrderDescriptionTable = (props) => {
  // eslint-disable-next-line react/prop-types
  const { items } = props;

  return (
    <div>
      <Table
        size="small"
        columns={columns}
        dataSource={items}
        rowKey="_id"
        bordered
      />
    </div>
  );
};

export default OrderDescriptionTable;
