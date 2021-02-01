import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../Components/Dashboard/Dashboard';
import Order from '../Components/Orders/Order';
import Products from '../Components/Products/Products';
import Members from '../Components/Members/Members';
import Connections from '../Components/Connections/Connections';
import Systems from '../Components/Systems/Systems';

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
