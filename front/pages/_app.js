import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Reset from 'styled-reset';
import withRedux from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import themes from '../styles/themes';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import reducer from '../reducers';
import rootSaga from '../sagas';

const GlobalStyle = createGlobalStyle`
  ${Reset}
  *{
    box-sizing: border-box;
  }
  html, body{
    font-family: 'Roboto', sans-serif;
  }
`;

const App = ({ Component, store, pageProps }) => {
  return (
    <Provider store={store}>
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
        <Navigation />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
};

App.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object.isRequired,
};

const configureStore = (initialState, options) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : compose(
          applyMiddleware(...middlewares),
          !options.isServer &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : f => f
        );

  const store = createStore(reducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
};

export default withRedux(configureStore)(App);
