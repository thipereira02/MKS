import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import GlobalStyle from './layouts/GlobalStyle';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

import store from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <Home />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
