import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Provider from 'react-redux/es/components/Provider';
import './css/index.css';
import App from './containers/app';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers';

export const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
