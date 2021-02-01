import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

const SubmitButtonStyled = styled(Button)`
  width: 100%;
`;

const SubmitButton = () => (
  <SubmitButtonStyled type="primary" htmlType="submit" className="login-form-button">
    Log in
  </SubmitButtonStyled>
);

export default SubmitButton;
