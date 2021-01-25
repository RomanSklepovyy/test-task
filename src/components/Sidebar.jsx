import React from 'react';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <Sider>
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
      <Menu.Item>
        <Link to="/">JetStream</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/dashboard">Dashboard</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/orders">Orders</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/products">Products</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/members">Members</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/connections">Connections</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/systems">Systems</Link>
      </Menu.Item>
    </Menu>
  </Sider>
);

export default Sidebar;
