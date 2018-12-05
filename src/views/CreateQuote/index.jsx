/**
 * @flow
 * External Dependencies
 */
import * as React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';

/**
 * Internal Dependencies
 */
import { Page } from '../../helpers/global';

// Components
import BackTabButton from '../../components/backTabButton';
import AlertBanner from '../../components/alert';

// Styles
import {
  QuoteBg,
  QuoteEditor,
  QuoteInput,
  QuoteAuthorInput,
  QuoteCreationFooter,
  QuoteTagList,
  QuoteTagItem,
  QuoteTagsInput,
  QuoteCreateBtn
} from './styles';

/**
 * Flow Type
 */
type Props = {
  history: Object
};

type State = {
  quote: string,
  author: string,
  tags: string,
  bgUrl: string,
  errorMsg: boolean,
};

/**
 * Local Variables
 */
const UNSPLASH_URL = 'https://source.unsplash.com/1920x1920';

// createQuote mutation
const CREATE_QUOTE = gql`
  mutation CreateQuote($quote: QuoteInput!) {
    createQuote(quote: $quote) {
      status
      message
      data {
        _id
      }
    }
  }
`;

/**
 * CreateQuote Component
 * Let's user create a new quote
 */
class CreateQuote extends React.Component<Props, State> {
  state = {
    quote: '',
    author: '',
    tags: '',
    bgUrl: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)),url("${UNSPLASH_URL}") no-repeat center`,
    errorMsg: false,
  };

  /**
   * Generate background on mount
   */
  componentDidMount = () => {
    this.generateBg();
  }

  /**
   * Generates the background from Unsplash and is updated
   * if tag state is updated.
   */
  generateBg = () => {
    const { tags } = this.state;
    const URL = (tags.length > 0)
      ? `${UNSPLASH_URL}/?${tags.trim()}`
      : `${UNSPLASH_URL}/?nature`;

    const bgUrl = `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)),url("${URL}") no-repeat center`;
    this.setState({
      bgUrl
    });
  }

  /**
   * Returns true if quote, author, and tags are filled
   * @param {string} quote
   * @param {string} author
   * @param {string} tags
   */
  validateFields = (quote: string, author: string, tags: string) => (
    quote.trim() !== '' && author.trim !== '' && tags.trim() !== ''
  );

  /**
   * Hides alert
   */
  hideAlert = () => {
    this.setState({
      errorMsg: false
    });
  }

  /**
   * Maps the input field to state
   * @param {Event} e
   */
  onInputType = (e: SyntheticKeyboardEvent<HTMLInputElement>) => {
    const key = e.currentTarget.getAttribute('data-key');

    if (key) {
      this.setState({
        [key]: e.currentTarget.value,
      }, () => {
        this.generateBg();
      });
    }
  }

  /**
   * Creates the quote on click. If successful, redirects
   * the user to the quote (/quote/:quote_id)
   *
   * @param {function} cb: callback function
   */
  onCreateClick = (cb: Function) => {
    const { quote, author, tags, bgUrl } = this.state;
    const isValid = this.validateFields(quote, author, tags);

    if (isValid) {
      const serializedQuote = {
        quote,
        author,
        tags: tags.split(','),
        background: bgUrl
      };

      cb({ variables: { quote: serializedQuote } });
    } else {
      this.setState({
        errorMsg: true
      });
    }
  }

  /**
   * Renders Quote Editor, which contains Author and
   * Quote field.
   */
  RenderQuoteEditor = () => (
    <QuoteEditor>
      <QuoteAuthorInput
        placeholder="Helen Keller"
        data-key="author"
        type="text"
        value={this.state.author}
        onKeyUp={this.onInputType}
        onChange={this.onInputType}
      />
      <QuoteInput
        placeholder="The only thing worse than being blind is having sight but no vision..."
        data-key="quote"
        type="text"
        value={this.state.quote}
        onKeyUp={this.onInputType}
        onChange={this.onInputType}
      />
    </QuoteEditor>
  );

  /**
   * Renders list of tags used for the quote
   */
  RenderTagList = () => {
    const { tags } = this.state;
    const tagArr = tags.trim().split(',');

    if (tags.trim() !== '') {
      return tagArr.map((tag) => (
        <li key={tag}>
          <QuoteTagItem>{tag}</QuoteTagItem>
        </li>
      ));
    }
    return <li><QuoteTagItem>No Tags Yet</QuoteTagItem></li>;
  }

  /**
   * Renders the Create button. Wrapped within the Mutation
   * by react-apollo to trigger a mutation event on click.
   */
  RenderCreateButton = () => (
    <Mutation mutation={CREATE_QUOTE}>
      {(createQuote, { data }) => {
        if (data) {
          this.props.history.push(`/quote/${data.createQuote.data._id}`);
        }
        return (
          <QuoteCreateBtn onClick={() => this.onCreateClick(createQuote)}>
            Create
            <i className="material-icons">arrow_forward</i>
          </QuoteCreateBtn>
        );
      }}
    </Mutation>
  )

  /**
   * Renders quote creation footer, which contains list
   * of tags, input field to enter tags,and the create
   * button.
   */
  RenderQuoteCreationFooter = () => (
    <QuoteCreationFooter
      split="4fr 3fr 150px"
      tabletSplit="1fr 150px"
      mobileSplit="1fr"
      gap="1.5rem"
      mobileGap="1rem"
      alignVertically
    >
      <QuoteTagList>
        {this.RenderTagList()}
      </QuoteTagList>
      <QuoteTagsInput
        placeholder="tag1, tag2, tag3"
        data-key="tags"
        value={this.state.tags}
        onKeyUp={this.onInputType}
        onChange={this.onInputType}
      />
      {this.RenderCreateButton()}
    </QuoteCreationFooter>
  );

  // Render
  render() {
    return (
      <Page bg="#FFFFFF">
        <QuoteBg bg={this.state.bgUrl}>
          {(this.state.errorMsg)
            ? (
              <AlertBanner
                hide={this.hideAlert}
                type="error"
                icon="bug_report"
                title="Not Done, Hun!"
                info="Please enter the <strong>quote</strong>, <strong>author</strong>, & <strong>tags</strong>."
              />
            ) : null
          }
          <BackTabButton to="/" />
          {this.RenderQuoteEditor()}
          {this.RenderQuoteCreationFooter()}
        </QuoteBg>
      </Page>
    );
  }
}

// Export
export default withRouter(CreateQuote);
