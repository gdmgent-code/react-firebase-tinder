import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import './BaseLayout.scss';

const BaseLayout = ({children}) => (
  <Fragment>
    <p>hjjhjhj</p>
    <main className={classnames('app-main')}>
      { children }      
    </main>
  </Fragment>
);
export default BaseLayout;