/**
 * External Dependencies
 */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

/**
 * Internal Dependencies
 */
import { SCHEME, COLORS } from '../../helpers/variables';

/**
 * BackTabButton
 * @type Link
 *
 * Styles the back button
 */
export const BackTabButtonItem = styled(Link)`
  position: fixed;
  top: 2rem;
  left: 0;
  padding: 8px 0 8px 1rem;
  border-radius: 0 40px 40px 0;
  transform: translateX(-0.5rem);
  cursor: pointer;
  transition: 0.15s all ease-in;
  background: rgba(255,255,255,0.25);
  line-height: 100%;

  i {
    width: 36px;
    font-weight: 700;
    font-size: 22px;
    color: ${COLORS.white};
    transition: 0.15s all ease-in;
  }

  &:hover {
    background: ${SCHEME.primary};
    transform: translateX(0);

    i {
      color: ${COLORS.white};
      transform: translateX(-5px);
    }
  }
`;
