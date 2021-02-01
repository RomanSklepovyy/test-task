const getOrdersColumn = (sortedInfo) => [
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
    title: 'Created at',
    dataIndex: 'createdAt',
    key: 'createdAt',
    ellipsis: true,
  },
];

export default getOrdersColumn;
