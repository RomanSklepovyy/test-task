import { Icon, Input } from 'antd';
import React from 'react';

const PasswordInput = () => (
  <Input
    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
    type="password"
    placeholder="Password"
  />
);

export default PasswordInput;
