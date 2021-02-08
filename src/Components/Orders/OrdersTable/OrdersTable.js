import React, { useState } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import OrderDescription from './OrderDescriptionTable/OrderDescriptionTable';
import getColumns from './getOrdersColumn';
import { setSelectedAction } from '../../../redux/orders/orderActions';

const OrdersTable = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const orders = useSelector((state) => state.order.orders);
  const selected = useSelector((state) => state.order.selected);
  const isLoading = useSelector((state) => state.order.isLoading);
  const [sortedInfo, setSortedInfo] = useState({});

  const handleChange = (pagination, filters, sorter) => {
    setSortedInfo(sorter);
  };

  const onChangeSelected = (selectedRowKeys) => {
    dispatch(setSelectedAction({ selected: selectedRowKeys }));
  };

  const rowSelection = {
    selected,
    onChange: onChangeSelected,
  };

  return (
    <Table
      rowSelection={rowSelection}
      columns={getColumns(sortedInfo, dispatch, history)}
      dataSource={orders}
      onChange={handleChange}
      rowKey="_id"
      bordered
      loading={isLoading}
      expandedRowRender={(record) => <OrderDescription items={record.lineItems} />}
    />
  );
};

export default OrdersTable;
