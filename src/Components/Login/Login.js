import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import FormHeader from '../../Styles/formHeader';

const Login = ({ login }) => (
  <>
    <FormHeader>
      Login:
    </FormHeader>
    <LoginForm />
  </>

);

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default Login;
