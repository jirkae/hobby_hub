import React, { Component } from 'react';
import { Router, applyRouterMiddleware, browserHistory } from 'react-router'
import Notifications, { notify } from 'react-notify-toast';
import { Provider, createStore } from 'react-redux';
import reducers from './reducers/reducers';

import './scss/app.scss';

import { createRoutes } from './createRoutes.js';

class App extends Component {
  render() {
    const routes = createRoutes();
    const store = createStore(reducers);

    return (
      <Provider store={ store }>
        <Notifications/>
        <Router history={browserHistory} render={applyRouterMiddleware()}>
          {routes}
        </Router>
      </Provider>
    );
  }
}

export default App;
