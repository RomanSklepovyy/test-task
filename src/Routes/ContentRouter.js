import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../Components/Dashboard/Dashboard';
import Order from '../Components/Orders/Order';
import Products from '../Components/Products/Products';
import Members from '../Components/Members/Members';
import Connections from '../Components/Connections/Connections';
import Systems from '../Components/Systems/Systems';
import PrivateRoute from './PrivateRoute';
import CreateOrderForm from '../Components/CreateOrderForm/CreateOrderForm';
import UpdateOrderForm from '../Components/UpdateOrderFrom/UpdateOrderForm';
import MainPage from '../Components/MainPage/MainPage';

const ContentRouter = () => (
  <Switch>
    <PrivateRoute exact path="/" component={MainPage} />
    <PrivateRoute path="/dashboard" component={Dashboard} />
    <PrivateRoute exact path="/orders" component={Order} />
    <PrivateRoute path="/products" component={Products} />
    <PrivateRoute path="/members" component={Members} />
    <PrivateRoute path="/connections" component={Connections} />
    <PrivateRoute path="/orders/create" component={CreateOrderForm} />
    <PrivateRoute path="/orders/update" component={UpdateOrderForm} />
    <PrivateRoute path="/systems" component={Systems} />
    <Route render={() => (<h1>Not found</h1>)} />
  </Switch>
);

export default ContentRouter;
