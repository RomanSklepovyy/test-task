import React, { useState } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import OrderDescription from './OrderDescriptionTable/OrderDescriptionTable';
import getColumns from './getOrdersColumn';
import { setSelectedAction } from '../../../redux/orders/orderActions';
import { getOrdersThunk } from '../../../redux/orders/orderThunks';

const OrdersTable = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const orders = useSelector((state) => state.order.orders);
  const selected = useSelector((state) => state.order.selected);
  const isLoading = useSelector((state) => state.order.isLoading);
  const [sortedInfo, setSortedInfo] = useState({});

  const handleChange = (pagination, filters, sorter) => {
    let sortOptions = {};

    if ((pagination.current * pagination.pageSize) >= (orders.length - 10)) {
      console.log('Time to load data');
    }

    if (sortedInfo.field !== sorter.field || sortedInfo.order !== sorter.order) {
      if (sorter.field && sorter.order) {
        sortOptions = {
          sortBy: sorter.field,
          sortType: sorter.order,
        };
      }

      setSortedInfo(sorter);
      dispatch(getOrdersThunk(sortOptions));
    }
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
