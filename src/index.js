import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider, createStore } from 'react-redux';
import reducers from './reducers/reducers';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store = { store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
