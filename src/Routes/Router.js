import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../Components/Dashboard/Dashboard';
import Order from '../Components/Orders/Order';
import Products from '../Components/Products/Products';
import Members from '../Components/Members/Members';
import Connections from '../Components/Connections/Connections';
import Systems from '../Components/Systems/Systems';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import PrivateRoute from './PrivateRoute';

const ContentRouter = () => (
  <Switch>
    <Route exact path="/" render={() => (<h1>Main page</h1>)} />
    <PrivateRoute path="/dashboard" component={Dashboard} />
    <PrivateRoute path="/orders" component={Order} />
    <PrivateRoute path="/products" component={Products} />
    <PrivateRoute path="/members" component={Members} />
    <PrivateRoute path="/connections" component={Connections} />
    <PrivateRoute path="/systems" component={Systems} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Register} />
    <Route render={() => (<h1>Not found</h1>)} />
  </Switch>
);

export default ContentRouter;
