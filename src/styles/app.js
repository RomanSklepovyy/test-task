import { Layout } from 'antd';
import styled from 'styled-components';

const { Content } = Layout;
export const StyledLayout = styled(Layout)`
  height: 100vh;
`;

export const StyledContent = styled(Content)`
  background-color: white;
  padding: 20px;
  margin: 20px;
  overflow-y: auto;
`;
