import { createSelector } from 'reselect';
import { values } from 'ramda';

const orderListSelector = (state) => state.order.list;

export const tableDataSourceSelector = createSelector(
  orderListSelector,
  (list) => values(list),
);

const getOrderByIdSelector = (state, props) => state.order.list[props.id];

export const orderByIdSelector = () => createSelector(
  getOrderByIdSelector,
  (order) => order,
);
