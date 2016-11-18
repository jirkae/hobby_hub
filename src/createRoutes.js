import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Layout from './components/layout/Layout.js';
import LandingPage from './pages/LandingPage.js';
import EventsListPage from './pages/EventsListPage.js';
import EventDetailPage from './pages/EventDetailPage.js';
import EventsCreatePage from './pages/EventsCreatePage.js';
import UsersPage from './pages/UsersPage.js';
import UserDetailPage from './pages/UserDetailPage.js';
import Page404 from './pages/Page404.js';

export function createRoutes() {
  return (
    <Route path="/" component={Layout}>
      <IndexRoute component={LandingPage}/>
      <Route path="/events">
        <IndexRoute component={EventsListPage}/>
        <Route path=":eventId" component={EventDetailPage}/>
      </Route>
      <Route path="/create-event" component={EventsCreatePage}></Route>
      <Route path="/users">
        <IndexRoute component={UsersPage}/>
        <Route path=":userId" component={UserDetailPage}/>
      </Route>
      <Route path="*" component={Page404}/>
    </Route>
  );
}
