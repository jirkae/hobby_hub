import React, { Component } from 'react';
import { Router, applyRouterMiddleware, browserHistory } from 'react-router'
import Notifications from 'react-notify-toast';

import './scss/app.scss';

import { createRoutes } from './createRoutes.js';

class App extends Component {
  render() {
    const routes = createRoutes();

    return (
      <div>
        <Notifications/>
        <Router history={browserHistory} render={applyRouterMiddleware()}>
           {routes}
         </Router>
      </div>
    );
  }
}

export default App;
