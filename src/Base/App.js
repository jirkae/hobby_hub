import React, { Component } from 'react';
import { Router, applyRouterMiddleware, browserHistory } from 'react-router'
import { Provider } from 'react-redux';
import { applyMiddleware, compose  } from 'redux';
import { createRoutes } from './createRoutes.js';
import thunk from 'redux-thunk';

import './scss/app.scss';

import { configureStore } from './services/configureStore';
import { loadState, saveState } from './services/localState';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadState();

const store = configureStore(persistedState, saveState, composeEnhancers(applyMiddleware(thunk)));

class App extends Component {
  render() {
    let routes = createRoutes();

    return (
      <Provider store={ store }>
        <Router history={browserHistory} render={applyRouterMiddleware()}>
          {routes}
        </Router>
      </Provider>
    );
  }
}

export default App;
