/**
 * @flow
 * External Dependencies
 */
import * as React from 'react';

/**
 * Internal Dependencies
 */
import { Loading, LoadingInner, LoadingSpinner } from './styles';

/**
 * Renders Loading Snipper when loading data from graphql
 * @TODO: Add funny messages chosen randomly
 */
const LoadingScreen = (): React.Element<typeof Loading> => (
  <Loading>
    <LoadingInner>
      <LoadingSpinner />
    </LoadingInner>
  </Loading>
);

// Export
export default LoadingScreen;
