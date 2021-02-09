import { createSelector } from 'reselect';
import { values } from 'ramda';

const orderListSelector = (state) => state.order.list;

export const tableDataSourceSelector = createSelector(
  orderListSelector,
  (list) => values(list),
);
