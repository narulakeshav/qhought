/**
 * @flow
 * External Dependencies
 */
import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { toIdValue } from 'apollo-utilities';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Link } from 'react-router-dom';

/**
 * Internal Dependencies
 */
import Loading from '../LoadingScreen';
import ErrorPage from '../ErrorPage';
import Quote from '../../components/quote';

// Global styles
import {
  Page,
  Section,
  GridSection,
  H5,
  Img
} from '../../helpers/global';
import { HomeHeader, GradientBtn, CreateBtn } from './styles';

/**
 * Local Variables
 */

/**
 * Get GraphQL query to get all quotes
 * @TODO: Use caching to load quotes faster
 */
const GET_QUOTES = gql`
  query allQuotes {
    quotes {
      __typename
      _id
      background
      quote
      author
      tags
      claps
      laughs
      loves
    }
  }
`;

const cache = new InMemoryCache({
  cacheRedirects: {
    Query: {
      quotes: (_, args) => args.ids.map((id) => toIdValue(cache.config.dataIdFromObject({ __typename: 'Quote', id }))),
    },
  },
});

/**
 * Renders each component card
 * @param {Object} comp
 */
const RenderQuotes = (quotes: Array<Object>): React.Element<typeof GridSection> => {
  const qList = quotes.map((q) => <Quote key={q._id} quote={q} />);
  return (
    <GridSection
      split="1fr 1fr 1fr"
      tabletSplit="1fr 1fr"
      mobileSplit="1fr"
      gap="2.5rem"
    >
      {qList}
    </GridSection>
  );
};

/**
 * Renders a default header with icon, title,
 * text, and a button to create a quote.
 */
const RenderHeader = () => (
  <HomeHeader>
    <Link to="/">
      <Img
        src="/assets/qhought/logo.svg"
        alt="qhought"
        width={4}
        margin="0.15rem 1rem 0.15rem 0"
        display="inline"
      />
      <H5 marginBottom>qhought</H5>
    </Link>
    <GradientBtn>Add a Quote</GradientBtn>
  </HomeHeader>
);

/**
 * Home Component
 */
const Home = (): React.Element<typeof Query> => (
  <Query query={GET_QUOTES}>
    {({ data, loading, error }) => {
      if (loading) return <Loading />;
      if (error) return <ErrorPage error={error} />;
      return (
        <Page bg="#F5F6FA">
          {RenderHeader()}
          <Section padding="2.5rem">
            {(data.quotes) ? RenderQuotes(data.quotes) : ''}
          </Section>
          <Link to="/quote/create">
            <CreateBtn>
              <i className="material-icons">add</i>
            </CreateBtn>
          </Link>
        </Page>
      );
  }}
  </Query>
);

// Export Home
export default Home;
