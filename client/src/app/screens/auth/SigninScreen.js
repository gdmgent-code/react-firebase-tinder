import React, { Fragment, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import { useAuth } from '../../services';
import * as Routes from '../../routes';

const SigninScreen = () => {

  /*const { currentUser } = useAuth();

  if (currentUser) {
    return <Redirect to={Routes.DASHBOARD} />;
  }*/

  return (
    <Fragment>
      Signin
    </Fragment>
  );
};

export default SigninScreen;