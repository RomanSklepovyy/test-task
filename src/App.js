import React from 'react';
import {Button, DatePicker} from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';

const RedGreetings = styled.h1`
  color: red;
`;

function App() {
  return (
    <div className="App">
        <h1>Hello world!</h1>
        <RedGreetings>Red hello world!</RedGreetings>
        <Button type="primary">Button</Button>
        <DatePicker placeholder="select date"/>
    </div>
  );
}

export default App;
