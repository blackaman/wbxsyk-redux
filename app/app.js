import React from 'react';
import thunk from 'redux-thunk';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reducers from './reducers/index';
import IndexList from './container/index-list/index-list';

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducers,
  applyMiddleware(...middleware)
);

const ele = document.createElement('div');
document.body.appendChild(ele);

render(
  <Provider store={store}>
    <IndexList />
  </Provider>,
  ele
);
