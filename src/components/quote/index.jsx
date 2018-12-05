/**
 * @flow
 * External Dependencies
 */
import * as React from 'react';
// import { Link } from 'react-router-dom';

/**
 * Internal Dependencies
 */
import { H4, Text } from '../../helpers/global';
import { QuoteCard, QuoteText } from './styles';

// Internal Component
import Reactions from '../reaction';

/**
 * Flow Types
 */
type Props = {
  quote: {
    _id: string,
    quote: string,
    author: string,
    background: string,
    tags: Array<string>,
    laughs: number,
    loves: number,
    claps: number
  },
  selectQuote: Function,
};

/**
 * Generates background image
 * @param {string} bg
 */
const genBg = (bg: string): string => {
  const bgArr = bg.split('/');
  bgArr[0] = bgArr[0].replace('rgba(0,0,0,0.4), rgba(0,0,0,0.2)', 'rgba(0,0,0,0.55), rgba(0,0,0,0.4)');
  bgArr[3] = '800x800';
  return bgArr.join('/');
};

/**
 * Renders the QuoteCard
 * @param {Props} props
 */
const Quote = (props: Props): React.Element<typeof QuoteCard> | null => (
  (props.quote && Object.keys(props.quote).length > 0)
    ? (
      <QuoteCard
        bg={genBg(props.quote.background)}
        padding="5rem 0 0"
        split="1fr"
        alignVertically
      >
        <QuoteText onClick={() => props.selectQuote(props.quote)}>
          <H4
            textWhite
            marginBottom
            lineHeight={115}
          >
            {(props.quote.quote.length > 75)
              ? `${props.quote.quote.substring(0, 75)}...`
              : props.quote.quote
            }
          </H4>
          <Text
            lightOpacity={0.65}
            fontSize={16}
            weightBold
            marginBottom
          >
            {props.quote.author}
          </Text>
        </QuoteText>
        <Reactions quote={props.quote} />
      </QuoteCard>
    )
    : null
);

// Export quote
export default Quote;
