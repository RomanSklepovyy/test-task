import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import OrderDescription from './OrderDescriptionTable/OrderDescriptionTable';
import getColumns from './getOrdersColumn';
import { setSelectedAction, setUpdatingOrder } from '../../../redux/orders/orderActions';
import { getOrdersThunk } from '../../../redux/orders/orderThunks';

const OrdersTable = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const total = useSelector((state) => state.order.count);
  const orders = useSelector((state) => state.order.orders);
  const selected = useSelector((state) => state.order.selected);
  const isLoading = useSelector((state) => state.order.isLoading);
  const [sortedInfo, setSortedInfo] = useState({});

  useEffect(() => {
    dispatch(getOrdersThunk());
  }, []);

  const handleChange = (pagination, filters, sorter) => {
    const { current, pageSize } = pagination;
    const { field, order } = sorter;
    setSortedInfo(sorter);

    const sortOptions = {
      limit: pageSize,
      skip: (current - 1) * pageSize,
      sortField: field,
      sortType: order,
    };

    dispatch(getOrdersThunk(sortOptions));
  };

  const onChangeSelected = (selectedRowKeys) => {
    dispatch(setSelectedAction({ selected: selectedRowKeys }));
  };

  const onEditHandler = () => {
    dispatch(setUpdatingOrder({ order }));
    history.push('/orders/update');
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
      pagination={{
        pageSize: 8,
        total,
      }}
      expandedRowRender={(record) => <OrderDescription items={record.lineItems} />}
    />
  );
};

export default OrdersTable;
