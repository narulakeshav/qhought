/**
 * External Dependencies
 */
import styled from 'styled-components';

/**
 * Internal Dependencies
 */
import { COLORS, FONT } from '../../helpers/variables';

/**
 * TagContainer
 * @type div
 *
 * Renders tag item for quote
 */
export const TagContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 925px) {
    justify-content: flex-start;
  }
`;

/**
 * TagItem
 * @type div
 *
 * Renders tag item for quote
 */
export const TagItem = styled.div`
  background: ${COLORS.white};
  border-radius: 40px;
  margin-left: 10px;
  padding: 4px 1.25rem;
  text-align: center;
  font: 700 ${FONT.size - 5}px ${FONT.family};

  @media screen and (max-width: 925px) {
    margin-left: 0;
    margin-right: 10px;
  }
`;
