/**
 * @flow
 * External Dependencies
 */
import * as React from 'react';

/**
 * Internal Dependencies
 */
import { BackTabButtonItem } from './styles';

/**
 * Flow Type
 */
type Props = {
  to: string,
  icon?: string,
};

/**
 * Renders Back Tab Button
 * @param {Props} props
 */
const BackTabButton = (props: Props) => (
  <BackTabButtonItem to={props.to}>
    <i className="material-icons">{props.icon}</i>
  </BackTabButtonItem>
);

// Default Props
BackTabButton.defaultProps = {
  icon: 'arrow_backward',
};

// Export
export default BackTabButton;
