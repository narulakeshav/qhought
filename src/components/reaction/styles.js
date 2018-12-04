/**
 * External Dependencies
 */
import styled from 'styled-components';

/**
 * Internal Dependencies
 */
import { COLORS, FONT } from '../../helpers/variables';

/**
 * QuoteReactions
 * @type div
 *
 * Wrapper to rap all the reaction buttons
 */
export const QuoteReactions = styled.div`
  align-self: end;
  background: ${(props) => (props.bg)};
  padding: ${(props) => (props.padding)};
  border-radius: ${(props) => (props.radius)};
`;

/**
 * ReactionBtn
 * @type button
 */
export const ReactionBtn = styled.button`
  background: ${COLORS.white};
  box-shadow: 0 2px 6px rgba(0,0,0,0.075);
  border-radius: 40px;
  height: 35px;
  padding: 2px 0.75rem;
  margin-right: 0.75rem;
  color: ${COLORS.dark};
  font: 700 ${FONT.size - 6}px ${FONT.family};
  cursor: pointer;
  transition: 0.15s all ease-in;

  img {
    width: 20px;
    vertical-align: middle;
  }

  &:hover {
    transform: scale(1.02);
  }
`;
