import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashboard';
import Order from '../components/Orders/Order';
import Products from '../components/Products/Products';
import Members from '../components/Members/Members';
import Connections from '../components/Connections/Connections';
import Systems from '../components/Systems/Systems';

const ContentRouter = () => (
  <Switch>
    <Route exact path="/" render={() => (<h1>Main page</h1>)} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/orders" component={Order} />
    <Route path="/products" component={Products} />
    <Route path="/members" component={Members} />
    <Route path="/connections" component={Connections} />
    <Route path="/systems" component={Systems} />
    <Route render={() => (<h1>Not found</h1>)} />
  </Switch>
);

export default ContentRouter;
