import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import OrderDescription from './OrderDescriptionTable/OrderDescriptionTable';
import getColumns from './getOrdersColumn';
import { setUpdatingOrder } from '../../../redux/orders/orderActions';
import { getOrdersThunk } from '../../../redux/orders/orderThunks';
import { tableDataSourceSelector } from '../../../selectors/order';

const OrdersTable = ({ selected, handleSelected }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const total = useSelector((state) => state.order.total);
  const orders = useSelector(tableDataSourceSelector);
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

  const editHandler = (order) => {
    // dispatch(setUpdatingOrder({ order }));
    // history.push('/orders/update');
  };

  const rowSelection = {
    selected,
    onChange: handleSelected,
  };

  return (
    <Table
      rowSelection={rowSelection}
      columns={getColumns(sortedInfo, editHandler)}
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

OrdersTable.propTypes = {
  selected: PropTypes.array.isRequired,
  handleSelected: PropTypes.func.isRequired,
};

export default OrdersTable;
