import React, { Component } from 'react';
import { Router, applyRouterMiddleware, browserHistory } from 'react-router'
// import Notifications  from 'react-notify-toast';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createRoutes } from './createRoutes.js';
import thunk from 'redux-thunk';

import './scss/app.scss';

import reducers from './reducers/reducers';

let store = createStore(reducers, applyMiddleware(thunk));

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
