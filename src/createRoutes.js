import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Layout from './components/layout/Layout.js';
import LandingPage from './pages/LandingPage.js';
import EventsListPage from './pages/EventsListPage.js';
import EventDetailPage from './pages/EventDetailPage.js';
import EventsCreatePage from './pages/EventsCreatePage.js';
import ProfilePage from './pages/ProfilePage.js';
import UserEventsPage from './pages/UserEventsPage';
import Page404 from './pages/Page404.js';

export function createRoutes() {
  return (
    <Route path="/" component={Layout}>
      <IndexRoute component={LandingPage}/>
      <Route path="/events">
        <IndexRoute component={EventsListPage}/>
        <Route path=":eventId" component={EventDetailPage}/>
      </Route>
      <Route path="/create-event">
        <IndexRoute component={EventsCreatePage}/>
        <Route path=":eventId" component={EventsCreatePage}/>
      </Route>
      <Route path="/profile" component={ProfilePage}></Route>
      <Route path="/myActions" component={UserEventsPage}></Route>
      <Route path="/user/:id" component={ProfilePage}></Route>
      <Route path="*" component={Page404}/>
    </Route>
  );
}
