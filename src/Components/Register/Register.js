import React from 'react';
import styled from 'styled-components';
import RegisterForm from './RegisterForm';
import FormHeader from '../../styles/formHeader';

const FormContainer = styled.div`
  max-width: 640px;
  margin: auto;
  padding: 0 20px 20px;
`;

const Register = () => (
  <>
    <FormHeader>
      Sign up
    </FormHeader>
    <FormContainer>
      <RegisterForm />
    </FormContainer>
  </>

);

export default Register;
