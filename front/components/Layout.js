import React from 'react';
import PropTypes from 'prop-types';

import Navigation from './Navigation';

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
