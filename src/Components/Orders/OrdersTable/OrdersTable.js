import React, { useState } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import OrderDescription from './OrderDescriptionTable/OrderDescriptionTable';
import getColumns from './getOrdersColumn';
import { useHistory } from 'react-router-dom';

const OrdersTable = () => {
  const dispatch = useDispatch();
  const history = useHistory();
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
      columns={getColumns(sortedInfo, dispatch, history)}
      dataSource={orders}
      onChange={handleChange}
      rowKey="_id"
      bordered
      expandedRowRender={(record) => <OrderDescription items={record.lineItems} />}
    />
  );
};

export default OrdersTable;
