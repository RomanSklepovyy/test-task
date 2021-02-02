import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Form, Input, Checkbox, Button,
} from 'antd';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/authentication/authThunks';

const container = styled.div`
  border: antiquewhite solid 2px;
`;

const RegisterForm = ({ form }) => {
  const dispatch = useDispatch();
  const [confirmDirty, setConfirmDirty] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        dispatch(loginThunk);
      }
    });
  };

  const handleConfirmBlur = (e) => {
    const { value } = e.target;
    setConfirmDirty(confirmDirty || !!value);
  };

  const compareToFirstPassword = (rule, value, callback) => {
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  const validateToNextPassword = (rule, value, callback) => {
    if (value && confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  const { getFieldDecorator } = form;

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  return (
    <Form {...formItemLayout} onSubmit={handleSubmit}>

      <Form.Item label={(<span> Full name&nbsp; </span>)}>
        {getFieldDecorator('fullName', {
          rules: [{ required: true, message: 'Please input your full name!', whitespace: true }],
        })(<Input />)}
      </Form.Item>

      <Form.Item label="E-mail">
        {getFieldDecorator('email', {
          rules: [
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ],
        })(<Input />)}
      </Form.Item>

      <Form.Item label="Password" hasFeedback>
        {getFieldDecorator('password', {
          rules: [
            {
              required: true,
              message: 'Please input your password!',
            },
            { validator: validateToNextPassword },
          ],
        })(<Input.Password />)}
      </Form.Item>

      <Form.Item label="Confirm Password" hasFeedback>
        {getFieldDecorator('confirm', {
          rules: [
            {
              required: true,
              message: 'Please confirm your password!',
            },
            { validator: compareToFirstPassword },
          ],
        })(<Input.Password onBlur={handleConfirmBlur} />)}
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        {getFieldDecorator('agreement', {
          valuePropName: 'checked',
        })(
          <Checkbox>
            I have read the
            {' '}
            <a href="">agreement</a>
          </Checkbox>,
        )}
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>

    </Form>
  );
};

RegisterForm.propTypes = {
  form: PropTypes.object.isRequired,
  validateFieldsAndScroll: PropTypes.func.isRequired,
};

export default Form.create({ name: 'normal_register' })(RegisterForm);
