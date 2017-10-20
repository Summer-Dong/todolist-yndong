import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Provider from 'react-redux/es/components/Provider';
import 'semantic-ui/dist/semantic.min.css';
import App from './containers/app';
import reducer from './reducers';

export const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
