import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';
import Sidebar from './Components/Sidebar/Sidebar';
import ContentRouter from './Routes/ContentRouter';
import Header from './Components/Header/Header';
import { StyledLayout, StyledContent } from './Styles/app';
import MainRoute from './Routes/MainRoute';

function App() {
  return (
    <BrowserRouter>
      <MainRoute />
    </BrowserRouter>
  );
}

export default App;
