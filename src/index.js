import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import configureStore from './configureStore';
import rootSaga from './index-sagas';
import App from './app';

const store = configureStore();
store.runSaga(rootSaga);

const theme = {
};

export default () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);
