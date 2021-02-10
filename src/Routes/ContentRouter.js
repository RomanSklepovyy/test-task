import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const PrivateRoute = lazy(() => import('./PrivateRoute'));
const Dashboard = lazy(() => import('../Components/Dashboard/Dashboard'));
const Order = lazy(() => import('../Components/Orders/Order'));
const Products = lazy(() => import('../Components/Products/Products'));
const Members = lazy(() => import('../Components/Members/Members'));
const Connections = lazy(() => import('../Components/Connections/Connections'));
const Systems = lazy(() => import('../Components/Systems/Systems'));
const CreateOrderForm = lazy(() => import('../Components/CreateOrderForm/CreateOrderForm'));
const UpdateOrderForm = lazy(() => import('../Components/UpdateOrderFrom/UpdateOrderForm'));
const MainPage = lazy(() => import('../Components/MainPage/MainPage'));

const ContentRouter = () => (
  <Switch>
    <PrivateRoute exact path="/" component={MainPage} />
    <PrivateRoute path="/dashboard" component={Dashboard} />
    <PrivateRoute exact path="/orders" component={Order} />
    <PrivateRoute path="/products" component={Products} />
    <PrivateRoute path="/members" component={Members} />
    <PrivateRoute path="/connections" component={Connections} />
    <PrivateRoute path="/orders/create" component={CreateOrderForm} />
    <PrivateRoute path="/orders/update/:id" component={UpdateOrderForm} />
    <PrivateRoute path="/systems" component={Systems} />
    <Route render={() => (<h1>Not found</h1>)} />
  </Switch>
);

export default ContentRouter;
