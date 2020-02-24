import React from 'react';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import classnames from 'classnames';

import { AuthProvider, FirebaseProvider } from './services';

import * as Routes from './routes';
import { AuthRouteWithLayout, RouteWithLayout } from './utilities';

import { FrontofficeLayout, BaseLayout } from './layouts';
import { AppScreen, ChatScreen, HomeScreen, SignupScreen, SignInScreen } from './screens';

import './App.scss';

const App = () => {
  return (
    <div className="app">
      <FirebaseProvider>
        <AuthProvider>
          <Router>
            <Switch>
              <RouteWithLayout exact path={ Routes.LANDING } layout={ BaseLayout } component={ HomeScreen }/>
              <Redirect from={ Routes.HOME } to="/"/>
              <RouteWithLayout exact path={ Routes.AUTH_SIGNIN } layout={ BaseLayout } component={ SignInScreen }/>
              <RouteWithLayout exact path={ Routes.AUTH_SIGNUP } layout={ BaseLayout } component={ SignupScreen }/>
              <AuthRouteWithLayout path={ Routes.APP } layout={ FrontofficeLayout } component={ AppScreen }/>
            </Switch>
          </Router>
        </AuthProvider>
      </FirebaseProvider>
    </div>
  );
}

export default App;