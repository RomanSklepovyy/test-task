import React, { useState } from 'react';
import { Table } from 'antd';
import { dataSource } from './data';
import OrderDescription from './OrderDescriptionTable/OrderDescriptionTable';
import getColumns from './getOrdersColumn';

const OrdersTable = () => {
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
      dataSource={dataSource}
      onChange={handleChange}
      bordered
      expandedRowRender={(record) => <OrderDescription items={record.items} />}
    />
  );
};

export default OrdersTable;
