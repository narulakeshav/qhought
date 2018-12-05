/**
 * @flow
 * External Dependencies
 */
import * as React from 'react';
import { Link } from 'react-router-dom';

/**
 * Internal Dependencies
 */
// Components
import Tags from '../tags';
import Reactions from '../reaction';

// Internal Styles
import {
  QuoteBackdrop,
  QuoteCover,
  QuoteInfo,
  QuoteActions,
  CloseQuote,
  ExpandQuote
} from './styles';
import { H2, Text } from '../../helpers/global';

/**
 * Flow Type
 */
type Props = {
  quote: {
    _id?: string,
    background?: string,
    quote?: string,
    author?: string,
    tags?: Array<string>
  },
  hide: Function
};

/**
 * Renders quote information (quote, author)
 * @param {Object} quote
 */
const RenderQuoteInfo = (quote: Object): React.Element<typeof QuoteInfo> => (
  <QuoteInfo>
    <H2 textWhite lineHeight={120} hasShadow>{quote.quote}</H2>
    <Text
      marginTop
      lightOpacity={0.75}
      weightNormal
    >
      {quote.author}
    </Text>
  </QuoteInfo>
);

/**
 * Renders quote reaction buttons and tags
 * @param {Object} quote
 */
const RenderQuoteActions = (quote: Object): React.Element<typeof QuoteInfo> => (
  <QuoteActions tabletSplit="1fr 1fr" mobileSplit="1fr" mobileGap="1rem">
    <Reactions
      bg="none"
      quote={quote}
      radius={0}
      padding="0"
    />
    <Tags
      align="right"
      tags={quote.tags}
    />
  </QuoteActions>
);

/**
 * Generates background image
 * @param {string} bg
 */
const genBg = (bg: ?string): string | null => {
  if (bg) {
    const bgArr = bg.split('/');
    bgArr[3] = '1920x1080';
    return bgArr.join('/');
  }
  return null;
};

/**
 * Renders the Quote Screen
 * @param {Props} props
 */
const QuoteModal = (props: Props): React.Element<typeof QuoteCover> | null => (
  (props.quote && Object.keys(props.quote).length > 0)
    ? (
      <React.Fragment>
        <QuoteBackdrop onClick={props.hide} />
        <QuoteCover bg={genBg(props.quote.background)}>
          <Link to={`/quote/${props.quote._id || ''}`}>
            <ExpandQuote>
              <i className="material-icons">fullscreen</i>
            </ExpandQuote>
          </Link>
          <CloseQuote onClick={props.hide}>
            <i className="material-icons">close</i>
          </CloseQuote>
          {RenderQuoteInfo(props.quote)}
          {RenderQuoteActions(props.quote)}
        </QuoteCover>
      </React.Fragment>
    )
    : null
);

// Export
export default QuoteModal;
