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

// Modal
import QuoteModal from '../../components/quoteModal';

// Logo
import Logo from '../../../public/assets/qhought/logo.svg';

// Global styles
import {
  Page,
  Section,
  GridSection,
  H5,
  Span,
  Img
} from '../../helpers/global';
import { HomeHeader, GradientBtn, CreateBtn } from './styles';

/**
 * Local Variables
 */
type Props = {};
type State = {
  selectedQuote: Object
};

/**
 * Get GraphQL query to get all quotes
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

/**
 * Cache the quotes query in memory for faster load
 *
 */
const cache = new InMemoryCache({
  cacheRedirects: {
    Query: {
      quotes: (_, args) => args.ids.map((id) => toIdValue(cache.config.dataIdFromObject({
         __typename: 'Quote',
         id
      }))),
    },
  },
});

/**
 * Home Component
 */
class Home extends React.PureComponent<Props, State> {
  state = {
    selectedQuote: {}
  };

  /**
   * Hides Quote Modal
   */
  hideQuoteModal = () => {
    this.setState({
      selectedQuote: {}
    });
  }

  selectQuote = (quote: Object) => {
    this.setState({
      selectedQuote: quote
    });
  }

  /**
   * Renders a default header with icon, title,
   * text, and a button to create a quote.
   */
  RenderHeader = () => (
    <HomeHeader>
      <Link to="/">
        <Img
          src={Logo}
          alt="qhought"
          width="40px"
          mobileWidth={40}
          margin="0.15rem 1rem 0.15rem 0"
          mobileMargin="0.15rem 1rem 0.15rem 0"
          display="inline"
        />
        <H5 marginBottom>qhought</H5>
        <Span>new</Span>
      </Link>
      <Section>
        <a
          href="https://github.com/narulakeshav/qhought"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GradientBtn default>Repo</GradientBtn>
        </a>
        <Link to="/quote/create">
          <GradientBtn>Add a Quote</GradientBtn>
        </Link>
      </Section>
    </HomeHeader>
  );

  /**
   * Renders each component card
   * @param {Object} comp
   */
  RenderQuotes = (quotes: Array<Object>): React.Element<typeof GridSection> => {
    const qList = quotes.map((q) => (
      <Quote
        key={q._id}
        quote={q}
        selectQuote={this.selectQuote}
      />
    ));

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

  // Render <Home />
  render() {
    return (
      <Query query={GET_QUOTES}>
        {({ data, loading, error }) => {
          if (loading) return <Loading />;
          if (error) return <ErrorPage error={error} />;
          return (
            <Page bg="#FFFFFF" lockScroll={Object.keys(this.state.selectedQuote).length > 0}>
              {this.RenderHeader()}
              <Section padding="2.5rem">
                {(data.quotes) ? this.RenderQuotes(data.quotes) : ''}
              </Section>
              <Link to="/quote/create">
                <CreateBtn>
                  <i className="material-icons">add</i>
                </CreateBtn>
              </Link>
              <QuoteModal
                quote={this.state.selectedQuote}
                hide={this.hideQuoteModal}
              />
            </Page>
          );
      }}
      </Query>
    );
  }
}

// Export Home
export default Home;
