import React, { Fragment, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import { useAuth } from '../../services';
import * as Routes from '../../routes';

import { SignInForm } from '../../components';

const SignInScreen = () => {

  /*const { currentUser } = useAuth();

  if (currentUser) {
    return <Redirect to={Routes.DASHBOARD} />;
  }*/

  return (
    <Fragment>
      <SignInForm />
    </Fragment>
  );
};

export default SignInScreen;