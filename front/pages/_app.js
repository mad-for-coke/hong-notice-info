import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>홍익 알리미!</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object.isRequired,
};

export default App;
