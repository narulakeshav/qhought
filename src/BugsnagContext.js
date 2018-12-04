import React from 'react';
import bugsnag from '@bugsnag/js';
import bugsnagReact from '@bugsnag/plugin-react';

const bugsnagClient = bugsnag('70cd381d61cb5fcf65e453d471098e29');
bugsnagClient.use(bugsnagReact, React);

export const BugsnagContext = React.createContext({ notify: bugsnagClient.notify });
export const BugsnagClient = bugsnagClient;
