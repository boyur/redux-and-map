import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import createRootReducer from './reducers';

import App from './components/App'

let middleware;

if (process.env.NODE_ENV === 'development') {
  const loggerMiddleware = createLogger({
    collapsed: true
  });

  middleware = applyMiddleware(
    loggerMiddleware
  );
}

const store = createStore(
  createRootReducer,
  middleware
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
