import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import Provider from 'react-redux/es/components/Provider';
import 'semantic-ui/dist/semantic.min.css';
import thunk from 'redux-thunk';
import App from './containers/app';
import rootReducer from './reducers';

export const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
