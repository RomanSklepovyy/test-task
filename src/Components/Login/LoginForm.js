import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  Form, Checkbox, Input, Icon, Button,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginUser } from '../../redux/authentication/authThunks';

const FormStyled = styled(Form)`
  max-width: 300px;
  margin: auto;
`;

const SubmitButtonStyled = styled(Button)`
  width: 100%;
`;

const LoginForm = ({ form }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.authentication.isLoading);

  const handleSubmit = (e) => {
    e.preventDefault();

    form.validateFields((err, values) => {
      if (!err) {
        dispatch(loginUser(values));
        history.push('/');
      }
    });
  };

  const registerHandler = () => {
    history.push('/signup');
  };

  const { getFieldDecorator } = form;

  return (
    <FormStyled onSubmit={handleSubmit} className="login-form">
      <Form.Item validateStatus={isLoading ? 'validating' : ''} hasFeedback>
        {getFieldDecorator('email', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />,
        )}
      </Form.Item>

      <Form.Item validateStatus={isLoading ? 'validating' : ''} hasFeedback>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />,
        )}
      </Form.Item>

      <Form.Item>
        {getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: true,
        })(<Checkbox>Remember me</Checkbox>)}

        <a href="" style={{ float: 'right' }}>
          Forgot password
        </a>

        <SubmitButtonStyled type="primary" htmlType="submit" className="login-form-button">
          Log in
        </SubmitButtonStyled>

        Or
        {' '}

        <a onClick={registerHandler}>register now!</a>

      </Form.Item>
    </FormStyled>
  );
};

LoginForm.propTypes = {
  form: PropTypes.object.isRequired,
};

export default Form.create({ name: 'normal_login' })(LoginForm);
