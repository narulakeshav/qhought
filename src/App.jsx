/**
 * @flow
 * External Dependencies
 */
import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

/**
 * Internal Dependencies
 */
// eslint-disable-next-line
import './reset.css.js';
import { BugsnagContext } from './BugsnagContext';

// Views/Routes
import Home from './views/Home';
import Quote from './views/QuoteView';
import CreateQuote from './views/CreateQuote';
import Error404 from './views/ErrorPage';


/**
 * Local Variables
 */
type Props = {};

/**
 * App Component
 * Defines and manages all the Routes.
 */
class App extends React.Component<Props> {
  render() {
    return (
      <Router>
        <BugsnagContext.Consumer>
          {({ notify }) => {
            try {
              return (
                <div>
                  <Switch>
                    <Route
                      path="/"
                      component={Home}
                      exact
                    />
                    <Route
                      path="/quote/create"
                      component={CreateQuote}
                    />
                    <Route
                      path="/quote/:quoteId"
                      component={Quote}
                    />
                    <Route component={Error404} />
                  </Switch>
                </div>
              );
            } catch (err) {
              notify(new Error(err.message));
              return '';
            }
          }}
        </BugsnagContext.Consumer>
      </Router>
    );
  }
}

// Export
export default App;
