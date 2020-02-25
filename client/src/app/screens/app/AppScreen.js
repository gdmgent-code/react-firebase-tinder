import React, { Fragment } from 'react';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import * as Routes from '../../routes';
import { AuthRouteWithLayout, RouteWithLayout } from '../../utilities';

import ChatsScreen from './ChatsScreen';
import DashboardScreen from './DashboardScreen';
import ProfileScreen from './ProfileScreen';
import { FirestoreProvider } from '../../services';

const AppScreen = () => {
  return (
    <FirestoreProvider>
      <Redirect from={ Routes.APP } to={ Routes.APP_DASHBOARD }/>
      <Route path="/app/chats" component={ ChatsScreen }/>
      <Route path="/app/dashboard" component={ DashboardScreen }/>
      <Route path="/app/profile" component={ ProfileScreen }/>
    </FirestoreProvider>
  );
};

export default AppScreen;