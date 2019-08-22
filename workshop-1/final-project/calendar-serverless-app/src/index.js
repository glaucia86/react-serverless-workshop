import React from 'react';
import ReactDOM from 'react-dom';
import { EightBaseApolloClient } from '@8base/apollo-client';

import { ApolloProvider } from 'react-apollo-hooks';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const URI = 'https://api.8base.com/cjvuk51i0000701s0hvvcbnxg';

const apolloClient = new EightBaseApolloClient({
  uri: URI,
  withAuth: false
});

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
