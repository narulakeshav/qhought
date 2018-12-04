/**
 * @flow
 * External Dependencies
 */
import * as React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

/**
 * Internal Dependencies
 */
import { QuoteReactions, ReactionBtn } from './styles';
import { Img } from '../../helpers/global';

/**
 * Flow Type
 */
type Props = {
  quote: {
    claps: number,
    laughs: number,
    loves: number
  },
  bg?: string,
  padding?: string,
  radius?: string | number
};

type State = {
  hasClapped: boolean,
  hasLaughed: boolean,
  hasLoved: boolean
};

/**
 * Local Variables
 */
// Love Quote Mutation
const LOVE_QUOTE = gql`
  mutation LoveQuote($id: ID!) {
    loveQuote(id: $id) {
      status
      message
      data {
        quote
      }
    }
  }
`;

// Unlove Quote Mutation
const UN_LOVE_QUOTE = gql`
  mutation UnloveQuote($id: ID!) {
    unloveQuote(id: $id) {
      status
      message
      data {
        quote
      }
    }
  }
`;

// Laugh Quote Mutation
const LAUGH_QUOTE = gql`
  mutation LaughQuote($id: ID!) {
    laughQuote(id: $id) {
      status
      message
      data {
        quote
      }
    }
  }
`;

// Unlaugh Quote Mutation
const UN_LAUGH_QUOTE = gql`
  mutation UnlaughQuote($id: ID!) {
    unlaughQuote(id: $id) {
      status
      message
      data {
        quote
      }
    }
  }
`;

// Clap Quote Mutation
const CLAP_QUOTE = gql`
  mutation ClapQuote($id: ID!) {
    clapQuote(id: $id) {
      status
      message
      data {
        quote
      }
    }
  }
`;

// Unclap Quote Mutation
const UN_CLAP_QUOTE = gql`
  mutation UnclapQuote($id: ID!) {
    unclapQuote(id: $id) {
      status
      message
      data {
        quote
      }
    }
  }
`;

/**
 * Renders Reaction for a Quote
 * @param {Props} props
 */
class Reactions extends React.Component<Props, State> {
  state = {
    hasClapped: false,
    hasLaughed: false,
    hasLoved: false,
  };

  /* Default Props */
  static defaultProps = {
    bg: 'linear-gradient(180deg, rgba(0,0,0,0) 5%, rgba(0,0,0,1))',
    radius: '0 0 1rem 1rem',
    padding: '2rem 3rem',
  };

  /**
   * Renders Reaction Button Item
   *
   * @param {string} icon
   * @param {string} key
   * @param {number} counter
   * @param {Obect} tag
   */
  ReactionItem = (icon: string, key: string, counter: number, tag: Object): React.Element<typeof ReactionBtn> => (
    <Mutation mutation={tag}>
      {(mut) => (
        <ReactionBtn
          selected={this.state[key]}
          onClick={() => {
            // $FlowFixMe
            const quoteId = this.props.quote._id;
            mut({ variables: { id: quoteId } });
            this.setState((prevState) => ({
              [key]: !prevState[key]
            }));
          }}
        >
          <Img
            src={`/assets/reactions/icon-${icon}.svg`}
            alt={icon}
            width={100}
            margin="0 0.75rem 0 0"
          />
          {counter}
        </ReactionBtn>
      )}
    </Mutation>
  );

  // Render <QuoteReactions>
  render() {
    const { hasClapped, hasLaughed, hasLoved } = this.state;
    const { quote: { claps, laughs, loves } } = this.props;

    return (
      <QuoteReactions {...this.props}>
        {this.ReactionItem(
          'clap',
          'hasClapped',
          (hasClapped) ? claps + 1 : claps,
          (hasClapped) ? UN_CLAP_QUOTE : CLAP_QUOTE,
        )}
        {this.ReactionItem(
          'laugh',
          'hasLaughed',
          (hasLaughed) ? laughs + 1 : laughs,
          (hasLaughed) ? UN_LAUGH_QUOTE : LAUGH_QUOTE,
        )}
        {this.ReactionItem(
          'love',
          'hasLoved',
          (hasLoved) ? loves + 1 : loves,
          (hasLoved) ? UN_LOVE_QUOTE : LOVE_QUOTE
        )}
      </QuoteReactions>
    );
  }
}

// Export
export default Reactions;
