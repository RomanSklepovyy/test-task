import * as types from '../../../redux/orders/orderActionTypes';
import { setUpdatingOrder } from '../../../redux/orders/orderActions';

const getOrdersColumn = (sortedInfo, dispatch, history) => [
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
    dataIndex: 'orderedBy.email',
    key: 'email',
    sorter: (a, b) => (a.email > b.email ? -1 : 1),
    sortOrder: sortedInfo.columnKey === 'email' && sortedInfo.order,
  },
  {
    title: 'Ordered by',
    dataIndex: 'orderedBy.fullName',
    key: 'orderedBy',
    sorter: (a, b) => (a.orderedBy > b.orderedBy ? -1 : 1),
    sortOrder: sortedInfo.columnKey === 'orderedBy' && sortedInfo.order,
  },
  {
    title: 'Created at',
    dataIndex: 'createdAt',
    key: 'createdAt',
    ellipsis: true,
  },
  {
    key: 'update',
    fixed: 'right',
    width: 50,
    // eslint-disable-next-line react/react-in-jsx-scope
    render: (text, order) => {
      const onEditHandler = () => {
        dispatch(setUpdatingOrder({ order }));
        history.push('/orders/update');
      };
      return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <a onClick={onEditHandler}>update</a>
      );
    },
    ellipsis: true,
  },
];

export default getOrdersColumn;
