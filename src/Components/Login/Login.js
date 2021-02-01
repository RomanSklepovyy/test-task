import React from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';

const ContainerText = styled.div`
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 25px;
  color: dodgerblue;
`;

const Login = () => (
  <>
    <ContainerText>
      Login:
    </ContainerText>
    <LoginForm />
  </>

);

export default Login;
