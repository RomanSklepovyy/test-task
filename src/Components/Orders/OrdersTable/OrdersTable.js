import React, { useState } from 'react';
import { Table } from 'antd';
import { useSelector } from 'react-redux';
import OrderDescription from './OrderDescriptionTable/OrderDescriptionTable';
import getColumns from './getOrdersColumn';

const OrdersTable = () => {
  const orders = useSelector((state) => state.order.orders);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [sortedInfo, setSortedInfo] = useState({});

  const handleChange = (pagination, filters, sorter) => {
    setSortedInfo(sorter);
  };

  const onSelectChange = (selectedRows) => {
    setSelectedRowKeys(selectedRows);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <Table
      rowSelection={rowSelection}
      columns={getColumns(sortedInfo)}
      dataSource={orders}
      onChange={handleChange}
      rowKey="_id"
      bordered
      expandedRowRender={(record) => <OrderDescription items={record.lineItems} />}
    />
  );
};

export default OrdersTable;
