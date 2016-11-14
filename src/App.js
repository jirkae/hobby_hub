import React, { Component } from 'react';
import { Router, applyRouterMiddleware, browserHistory } from 'react-router'
import Notifications  from 'react-notify-toast';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/reducers';

import './scss/app.scss';

import { createRoutes } from './createRoutes.js';

let store = createStore(reducers);

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
