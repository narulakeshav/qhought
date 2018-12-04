/**
 * External Dependencies
 */
import styled from 'styled-components';

/**
 * Internal Dependencies
 */
import { COLORS, FONT } from '../../helpers/variables';

/**
 * TagItem
 * @type div
 *
 * Renders tag item for quote
 */
export const TagItem = styled.div`
  background: ${COLORS.white};
  border-radius: 40px;
  padding: 4px 1.25rem;
  text-align: center;
  justify-self: center;
  font: 700 ${FONT.size - 5}px ${FONT.family};
`;
