/**
 * @flow
 * External Dependencies
 */
import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

/**
 * Internal Dependencies
 */
import Loading from '../LoadingScreen';
import ErrorPage from '../ErrorPage';
import Reactions from '../../components/reaction';

// Components
import Tags from '../../components/tag';
import BackTabButton from '../../components/backTabButton';

// Internal Styles
import { QuoteCover, QuoteInfo, QuoteActions } from './styles';
import { H2, Text } from '../../helpers/global';

/**
 * Flow Type
 */
type Props = {
  match: Object
};

/**
 * Local Variables
 */

// graphql query to get a quote item
const GET_QUOTE = gql`
  query GetQuote($quoteId: ID!) {
    quote(id: $quoteId) {
      _id
      quote
      author
      tags
      laughs
      claps
      loves
      background
    }
  }
`;

/**
 * Renders quote information (quote, author)
 * @param {Object} quote
 */
const RenderQuoteInfo = (quote: Object): React.Element<typeof QuoteInfo> => (
  <QuoteInfo>
    <H2 textWhite lineHeight={120}>{quote.quote}</H2>
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
  <QuoteActions mobileSplit="1fr" mobileGap="1rem">
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
const genBg = (bg: string): string => {
  const bgArr = bg.split('/');
  bgArr[0] = bgArr[0].replace('rgba(0,0,0,0.4), rgba(0,0,0,0.2)', 'rgba(0,0,0,0.55), rgba(0,0,0,0.4)');
  bgArr[3] = '1920x1080';
  return bgArr.join('/');
};

/**
 * Renders the Quote Screen
 * @param {Props} props
 */
const Quote = (props: Props): React.Element<typeof Query> => {
  const { quoteId } = props.match.params;
  return (
    <Query query={GET_QUOTE} variables={{ quoteId }}>
      {({ data, loading, error }) => {
        if (loading) return <Loading />;
        if (error) return <ErrorPage error={error} />;

        return (
          <QuoteCover bg={genBg(data.quote.background)}>
            <BackTabButton to="/" />
            {RenderQuoteInfo(data.quote)}
            {RenderQuoteActions(data.quote)}
          </QuoteCover>
        );
      }}
    </Query>
  );
};

// Export
export default Quote;
