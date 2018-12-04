/**
 * External Dependencies
 */
import styled from 'styled-components';

/**
 * Internal Dependencies
 */
import { GridSection } from '../../helpers/global';

/**
 * QuoteCover
 * @type div
 *
 * Styles the quote bg to cover the screen
 */
export const QuoteCover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  background: ${(props) => (props.bg)};
  background-attachment: cover;
`;

/**
 * QuoteInfo
 * @type div
 *
 * Centers the quote text/info
 */
export const QuoteInfo = styled.div`
  margin: auto 0;
  padding: 0 10vw;

  p {
    font-family: Georgia;

    &:before {
      content: "—";
    }
  }

  @media screen and (max-width: 925px) {
    position: relative;
    top: -1rem;

    h2 {
      font-size: 21px;
      line-height: 140%;
    }

    p {
      font-size: 16px;
    }
  }
`;

/**
 * QuoteActions
 * @type GridSection
 *
 * Aligns actions to bottom
 */
export const QuoteActions = styled(GridSection)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 3rem 10vw;
  background: linear-gradient(180deg, rgba(0,0,0,0) 5%, rgba(0,0,0,1));
`;
