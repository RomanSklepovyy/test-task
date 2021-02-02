import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Form, Checkbox } from 'antd';
import { useDispatch } from 'react-redux';
import PasswordInput from './Inputs/PasswordInput';
import UsernameInput from './Inputs/UsernameInput';
import SubmitButton from './Inputs/SubmitButton';

const FormStyled = styled(Form)`
  max-width: 300px;
  margin: auto;
`;

const LoginForm = ({ form, login }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        login();
      }
    });
  };

  const { getFieldDecorator } = form;

  return (
    <FormStyled onSubmit={handleSubmit} className="login-form">
      <Form.Item>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(<UsernameInput />)}
      </Form.Item>

      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }],
        })(<PasswordInput />)}
      </Form.Item>

      <Form.Item>
        {getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: true,
        })(<Checkbox>Remember me</Checkbox>)}

        <a href="" style={{ float: 'right' }}>
          Forgot password
        </a>

        <SubmitButton />

        Or
        {' '}

        <a href="">register now!</a>

      </Form.Item>
    </FormStyled>
  );
};

LoginForm.propTypes = {
  form: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
};

export default Form.create({ name: 'normal_login' })(LoginForm);
