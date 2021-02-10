import React from 'react';
import { Spin } from 'antd';
import styleSpin from './styleSpin';

const StyledSpin = styleSpin(Spin);

const SpinComponent = () => (
  <StyledSpin size="large" />
);

export default SpinComponent;
