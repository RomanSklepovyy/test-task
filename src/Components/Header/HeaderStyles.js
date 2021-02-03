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

export const Email = styled.span`
  font-weight: bold;
  color: dodgerblue;
  &:hover {
    cursor: pointer;
    color: black;
  }
`;

export const CompanySpan = styled.span`
  color: dodgerblue;
`;

export const SettingsIcon = styled(Icon)`
  margin-left: 10px;
  font-size: 18px;
  &:hover {
  cursor: pointer;
  color: black;
}
`;
