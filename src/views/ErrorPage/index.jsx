/**
 * @flow
 * External Dependencies
 */
import * as React from 'react';
import { Link } from 'react-router-dom';

/**
 * Internal Dependencies
 */
import { Page, GridSection, H2, Text } from '../../helpers/global';
import { GradientBtn } from '../Home/styles';

/**
 * Flow Type
 */
type Props = {
  error?: string
};

/**
 * Render Error Page when something goes wrong
 * @param {Props} props
 */
const Error404 = (props: Props) => (
  <Page bg="#FFFFFF">
    <GridSection split="1fr" padding="20vh 10vw" alignCenter alignVertically>
      <H2>Yikes, something is broken!</H2>
      {(props.error)
        ? <Text alignCenter fontSans>{props.error}</Text>
        : <Text alignCenter fontSans>Either something broke or this page does not exist.</Text>
      }
      <Link to="/">
        <GradientBtn>Go Back Home</GradientBtn>
      </Link>
    </GridSection>
  </Page>
);

// Default Props
Error404.defaultProps = {
  error: null
};

// Export
export default Error404;
