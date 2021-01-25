import React from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Sidebar from './components/Sidebar';
import Connections from './components/Connections/Connections';
import Dashboard from './components/Dashboard/Dashboard';
import Orders from './components/Orders/Orders';
import Products from './components/Products/Products';
import Members from './components/Members/Members';
import Systems from './components/Systems/Systems';

const { Header, Content } = Layout;

const StyledLayout = styled(Layout)`
  height: 100vh;
`;

const HeaderMenu = styled(Menu)`
  line-height: 64px;
  display: flex;
  justify-content: space-between;
`;

const MailButton = styled(Menu.Item)`
  right: 0;
`;

function App() {
  return (
    <BrowserRouter>
      <StyledLayout>
        <Sidebar />
        <Layout>
          <Header>
            <HeaderMenu mode="horizontal" theme="dark">
              <Menu.Item>
                Selector
              </Menu.Item>
              <MailButton>
                Mail
              </MailButton>
            </HeaderMenu>
          </Header>
          <Content>
            <Switch>
              <Route exact path="/" render={() => (<h1>Main page</h1>)} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/orders" component={Orders} />
              <Route path="/products" component={Products} />
              <Route path="/members" component={Members} />
              <Route path="/connections" component={Connections} />
              <Route path="/systems" component={Systems} />
              <Route render={() => (<h1>Not found</h1>)} />
            </Switch>
          </Content>
        </Layout>
      </StyledLayout>
    </BrowserRouter>
  );
}

export default App;
