import React, { Component } from 'react';
import { Router, applyRouterMiddleware, browserHistory } from 'react-router'
// import Notifications  from 'react-notify-toast';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createRoutes } from './createRoutes.js';

import './scss/app.scss';

import reducers from './reducers/reducers';
import enhancer from './services/enhancer';

const preloadedState = window.__PRELOADED_STATE__;
let store = createStore(reducers, preloadedState, applyMiddleware(enhancer));

class App extends Component {
  render() {
    let routes = createRoutes();

    return (
      <Provider store={ store }>
        {/*<Notifications/>*/}
        <Router history={browserHistory} render={applyRouterMiddleware()}>
          {routes}
        </Router>
      </Provider>
    );
  }
}

export default App;
