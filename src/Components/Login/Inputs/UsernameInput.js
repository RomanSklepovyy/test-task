import { Icon, Input } from 'antd';
import React from 'react';

const UsernameInput = () => (
  <Input
    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
    placeholder="Username"
  />
);

export default UsernameInput;
