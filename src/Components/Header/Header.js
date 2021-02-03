import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown, Menu } from 'antd';
import { useHistory } from 'react-router-dom';
import {
  HeaderContainer, HeaderItem, SettingsIcon, Email, CompanySpan,
} from './HeaderStyles';
import { logoutAction } from '../../redux/authentication/authActions';

// eslint-disable-next-line react/prop-types
const HeaderComponent = () => {
  const isAuthenticated = useSelector((state) => (state.authentication.isAuthenticated));
  const userName = useSelector((state) => (isAuthenticated ? state.authentication.user.fullName : ''));
  const email = useSelector((state) => (isAuthenticated ? state.authentication.user.email : 'Login'));
  const dispatch = useDispatch();
  const history = useHistory();

  const logOutHandler = () => {
    history.push('/');
    dispatch(logoutAction());
  };

  const loginHandler = (e) => {
    history.push('/login');
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <a onClick={logOutHandler}>
          Log out
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <HeaderContainer>
      <div>
        <HeaderItem>
          <CompanySpan>
            {userName}
          </CompanySpan>
        </HeaderItem>
      </div>
      <div>
        <HeaderItem>
          <span>
            <Email onClick={loginHandler}>
              {email}
            </Email>
            {
              isAuthenticated && (
              <Dropdown overlay={menu} placement="bottomCenter">
                <SettingsIcon type="setting" />
              </Dropdown>
              )
            }
          </span>
        </HeaderItem>
      </div>
    </HeaderContainer>
  );
};

export default HeaderComponent;
