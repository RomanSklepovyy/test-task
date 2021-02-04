import React from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';
import Sidebar from './Components/Sidebar/Sidebar';
import ContentRouter from './Routes/Router';
import Header from './Components/Header/Header';

const { Content } = Layout;
const StyledLayout = styled(Layout)`
  height: 100vh;
`;

const StyledContent = styled(Content)`
  background-color: white;
  padding: 20px;
  margin: 20px;
  overflow-y: auto;
`;

function App() {
  return (
    <BrowserRouter>
      <StyledLayout>
        <Sidebar />
        <Layout>
          <Header />
          <StyledContent>
            <ContentRouter />
          </StyledContent>
        </Layout>
      </StyledLayout>
    </BrowserRouter>
  );
}

export default App;
