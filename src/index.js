import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import './css/index.css';
import App from './containers/app';
import registerServiceWorker from './registerServiceWorker';
import Provider from "react-redux/es/components/Provider";
import reducer from "./reducers";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
document.getElementById('root')
)
registerServiceWorker();
