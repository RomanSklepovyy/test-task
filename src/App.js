import React, { Suspense, lazy } from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import SpinComponent from './Components/SpinComponent/SpinComponent';

const MainRoute = lazy(() => import('./Routes/MainRoute'));

function App() {
  return (
    <Suspense fallback={<SpinComponent />}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <MainRoute />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </Suspense>
  );
}

export default App;
