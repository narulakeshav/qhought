/**
 * @flow
 * External Dependencies
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

/**
 * Internal Dependencies
 */
import App from './App';
import { BugsnagContext, BugsnagClient } from './BugsnagContext';

/**
 * Local Variables
 * @TODO: Pass in env variable instead of fixed link
 */
const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql'
});

// wrap your entire app tree in the ErrorBoundary provided
const ErrorBoundary = BugsnagClient.getPlugin('react');

// bugsnagClient.notify(new Error('Test error'));
/**
 * Mount to DOM
 */
ReactDOM.render(
  <ErrorBoundary>
    <ApolloProvider client={client}>
      <BugsnagContext.Provider value={BugsnagClient.notify}>
        <App />
      </BugsnagContext.Provider>
    </ApolloProvider>
  </ErrorBoundary>,
  // $FlowFixMe
  document.querySelector('#app')
);

// $FlowFixMe
if (module.hot) {
  module.hot.accept();
}
