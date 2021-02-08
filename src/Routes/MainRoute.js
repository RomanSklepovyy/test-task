import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import { StyledContent, StyledLayout } from '../Styles/app';
import Header from '../Components/Header/Header';
import Sidebar from '../Components/Sidebar/Sidebar';
import ContentRouter from './ContentRouter';

const MainRouter = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Register} />
    <Route>
      <StyledLayout>
        <Sidebar />
        <Layout>
          <Header />
          <StyledContent>
            <ContentRouter />
          </StyledContent>
        </Layout>
      </StyledLayout>
    </Route>
  </Switch>
);

export default MainRouter;
