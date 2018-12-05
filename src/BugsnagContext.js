/**
 * External Dependencies
 */
import React from 'react';
import bugsnag from '@bugsnag/js';
import bugsnagReact from '@bugsnag/plugin-react';

/**
 * Local Variables
 * @TODO: Add bugsnag token as ENV variable
 */
const bugsnagClient = bugsnag('70cd381d61cb5fcf65e453d471098e29');
bugsnagClient.use(bugsnagReact, React);

/**
 * Export
 */
export const BugsnagContext = React.createContext({ notify: bugsnagClient.notify });
export const BugsnagClient = bugsnagClient;
