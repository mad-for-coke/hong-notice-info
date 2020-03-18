import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Reset from 'styled-reset';

import themes from '../styles/themes';
import Layout from '../components/Layout';

const GlobalStyle = createGlobalStyle`
  ${Reset}
  *{
    box-sizing: border-box;
  }
  html, body{
    font-family: 'Roboto', sans-serif;
  }
`;

const App = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={themes}>
        <GlobalStyle />
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
            rel="stylesheet"
          ></link>
          <script
            src="https://kit.fontawesome.com/4ac835cbcf.js"
            crossOrigin="anonymous"
          ></script>
          <title>홍익 알리미!</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object.isRequired,
};

export default App;
