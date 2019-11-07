import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import createRootReducer from './reducers';
import rootSagas from './sagas'

import App from './components/App';

const sagaMiddleware = createSagaMiddleware();

let middleware;

if (process.env.NODE_ENV === 'development') {
  const loggerMiddleware = createLogger({
    collapsed: true
  });

  middleware = applyMiddleware(
    sagaMiddleware,
    loggerMiddleware
  );
} else {
  middleware = applyMiddleware(
    sagaMiddleware
  );
}

const store = createStore(
  createRootReducer,
  middleware
);

sagaMiddleware.run(rootSagas);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
