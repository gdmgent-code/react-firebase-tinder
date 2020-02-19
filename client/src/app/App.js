import React from 'react';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import classnames from 'classnames';

import { AuthProvider, FirebaseProvider } from './services';

import * as Routes from './routes';
import { AuthRouteWithLayout, RouteWithLayout } from './utilities';

import { AppLayout, BaseLayout } from './layouts';
import { AppScreen, HomeScreen, SignupScreen, SigninScreen } from './screens';

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
              <RouteWithLayout exact path={ Routes.AUTH_SIGNIN } layout={ BaseLayout } component={ SigninScreen }/>
              <RouteWithLayout exact path={ Routes.AUTH_SIGNUP } layout={ BaseLayout } component={ SignupScreen }/>
              <AuthRouteWithLayout exact path={ Routes.APP } layout={ AppLayout } component={ AppScreen }/>
            </Switch>
          </Router>
        </AuthProvider>
      </FirebaseProvider>
    </div>
  );
}

export default App;