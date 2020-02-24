import React, { Fragment, useState } from 'react';
import { Navigation } from '../components';

import './FrontofficeLayout.css';

const FrontofficeLayout = ({children}) => {

  return (
    <div className="layout">
      <Navigation />
      <main className="main">
        {children}
      </main>
    </div>
  )
};
export default FrontofficeLayout;