import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';
import Sidebar from './Components/Sidebar/Sidebar';
import ContentRouter from './Routes/Router';
import Header from './Components/Header/Header';
import { StyledLayout, StyledContent } from './Styles/app';

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
