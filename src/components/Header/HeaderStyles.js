import { Layout, Icon } from 'antd';
import styled from 'styled-components';

const { Header } = Layout;

export const HeaderContainer = styled(Header)`
  padding: 5px 20px;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: space-between;
`;

export const HeaderItem = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 15px;
`;

export const SettingsIcon = styled(Icon)`
  margin-left: 10px;
  font-size: 18px;
`;

export const StyledSpan = styled.span`
  &:hover {
    cursor: pointer;
    color: black;
  }
`;
