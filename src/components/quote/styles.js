/**
 * External Dependencies
 */
import styled from 'styled-components';

/**
 * Internal Dependencies
 */
import { Section, GridSection } from '../../helpers/global';

/**
 * QuoteCard
 * @type GridSection
 */
export const QuoteCard = styled(GridSection)`
  background: ${(props) => (props.bg)};
  background-size: cover;
  border-radius: 1rem;
  width: 100%;
  height: 100%;
  box-shadow: 0 30px 40px -10px rgba(0,0,0,0.2);
  transition: 0.25s all ease-in;
  cursor: pointer;

  p {
    font-family: Georgia;

    &:before {
      content: "—";
    }
  }

  &:hover {
    transform: translate3D(0,-3px,0) scale(1.02);
  }
`;

/**
 * QuoteText
 * @type Section
 */
export const QuoteText = styled(Section)`
  padding: 0 3rem;
`;
