/**
 * External Dependencies
 */
import styled from 'styled-components';

/**
 * Internal Dependencies
 */
import { GridSection } from '../../helpers/global';
import { COLORS } from '../../helpers/variables';

/**
 * QuoteCover
 * @type div
 *
 * Styles the quote bg to cover the screen
 */
export const QuoteBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(25,26,31,0.98);
  transition: 0.15s all ease-in;
  opacity: 0;
  animation: fadeIn 0.25s linear forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

/**
 * QuoteCover
 * @type div
 *
 * Styles the quote bg to cover the screen
 */
export const QuoteCover = styled.div`
  position: fixed;
  top: 7.5vh;
  left: 5vw;
  display: flex;
  width: 90vw;
  height: 85vh;
  padding: 0;
  border-radius: 1rem;
  z-index: 10000;
  transform: scale(0.85);
  opacity: 0;
  background: ${(props) => (props.bg) ? props.bg : COLORS.white};
  background-attachment: cover;
  animation: scaleUp 0.25s linear 0.2s 1 forwards;

  @keyframes scaleUp {
    from {
      transform: scale(0.85);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
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
  width: 90vw;
  padding: 3rem 3.5rem;
  border-radius: 0 0 1rem 1rem;

  section {
    justify-items: end;
    align-items: start;
  }

  @media screen and (max-width: 925px) {
    section {
      display: flex;
      justify-items: start;

      * {
        margin-right: 10px;
      }
    }
  }
`;

/**
 * CloseBtn
 * @type button
 */
export const CloseQuote = styled.button`
  position: fixed;
  top: 9vh;
  right: 6.5vw;
  background: transparent;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  z-index: 10001;
  transition: 0.15s all ease-in;
  opacity: 0;
  cursor: pointer;
  animation: btnFade 1.15s linear forwards;

  i {
    margin: auto;
    color: ${COLORS.white};
    font-size: 24px;
    font-weight: 100;
  }

  &:hover {
    background: rgba(255,255,255,0.1);
  }

  @keyframes btnFade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

/**
 * CloseBtn
 * @type button
 */
export const ExpandQuote = styled(CloseQuote)`
  position: fixed;
  top: 9vh;
  left: 6.5vw;
  background: transparent;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  z-index: 10001;
  transition: 0.15s all ease-in;
  opacity: 0.75;
  cursor: pointer;

  i {
    margin: auto;
    color: ${COLORS.white};
    font-size: 24px;
    font-weight: 100;
  }

  &:hover {
    opacity: 1;
  }
`;
