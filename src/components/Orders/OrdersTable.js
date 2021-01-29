import React, { useState } from 'react';
import { Table } from 'antd';

const OrdersTable = () => {
  const dataSource = [
    {
      key: '1',
      status: 'crated',
      description: 'some important stuff',
      email: 'auser@mail.com',
      orderedBy: 'Andrew',
      shipTo: 'Lviv Shevchenko street',
      billTo: '',
      items: '',
      createdAt: new Date('2021-01-28 10:20:52.672Z'),
      updatedAt: new Date('2021-01-28 10:20:52.672Z'),
    },
    {
      key: '2',
      status: 'done',
      description: 'very very important stuff',
      email: 'buser@mail.com',
      orderedBy: 'David',
      shipTo: 'Ivano-Frankivsk Galytska street',
      billTo: '',
      items: '',
      createdAt: new Date('2021-01-28 12:31:22.937Z'),
      updatedAt: new Date('2021-01-28 12:31:22.937Z'),
    },
    {
      key: '3',
      status: 'in progress',
      description: 'delivering 562',
      email: 'cuser@mail.com',
      orderedBy: 'Billy',
      shipTo: 'Kyiv Shuhevicha street',
      billTo: '',
      items: '',
      createdAt: new Date('2021-01-26 15:37:49.779Z'),
      updatedAt: new Date('2021-01-26 15:37:49.779Z'),
    },
  ];

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [sortedInfo, setSortedInfo] = useState({});

  const columns = [
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      sorter: (a, b) => (a.description > b.description ? -1 : 1),
      sortOrder: sortedInfo.columnKey === 'description' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      sorter: (a, b) => (a.email > b.email ? -1 : 1),
      sortOrder: sortedInfo.columnKey === 'email' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: 'Ordered by',
      dataIndex: 'orderedBy',
      key: 'orderedBy',
      sorter: (a, b) => (a.orderedBy > b.orderedBy ? -1 : 1),
      sortOrder: sortedInfo.columnKey === 'orderedBy' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: 'Ship to',
      dataIndex: 'shipTo',
      key: 'shipTo',
      sorter: (a, b) => (a.shipTo > b.shipTo ? -1 : 1),
      sortOrder: sortedInfo.columnKey === 'shipTo' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: 'Bill to',
      dataIndex: 'billTo',
      key: 'billTo',
      sorter: (a, b) => (a.billTo > b.billTo ? -1 : 1),
      sortOrder: sortedInfo.columnKey === 'billTo' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: 'Line items',
      dataIndex: 'items',
      key: 'items',
    },
    // {
    //   title: 'Created at',
    //   dataIndex: 'createdAt',
    //   key: 'createdAt',
    // },
    // // {
    // //   title: 'Updated at',
    // //   dataIndex: 'updatedAt',
    // //   key: 'updatedAt',
    // // },
  ];

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
      columns={columns}
      dataSource={dataSource}
      onChange={handleChange}
      bordered
    />
  );
};

export default OrdersTable;
