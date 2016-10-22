import React, { Component } from 'react';
import { Router, applyRouterMiddleware, browserHistory } from 'react-router'

import './scss/app.scss';

import { createRoutes } from './createRoutes.js';

class App extends Component {
  render() {
    const routes = createRoutes();

    return (
      <Router history={browserHistory} render={applyRouterMiddleware()}>
         {routes}
       </Router>
    );
  }
}

export default App;
