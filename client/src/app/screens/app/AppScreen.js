import React, { Fragment } from 'react';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import * as Routes from '../../routes';
import { AuthRouteWithLayout, RouteWithLayout } from '../../utilities';

import ChatScreen from './ChatScreen';
import DashboardScreen from './DashboardScreen';

const AppScreen = () => {
  return (
    <Fragment>
      <Redirect from={ Routes.APP } to={ Routes.APP_DASHBOARD }/>
      <Route path="/app/chats" component={ ChatScreen }/>
      <Route path="/app/dashboard" component={ DashboardScreen }/>
    </Fragment>
  );
};

export default AppScreen;