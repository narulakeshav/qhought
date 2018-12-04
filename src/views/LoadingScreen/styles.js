/**
 * External Dependencies
 */
import styled from 'styled-components';

/**
 * Internal Dependencies
 */
import { COLORS, SCHEME } from '../../helpers/variables';

/**
 * Loading
 * @type div
 *
 * Loading screen wapper
 */
export const Loading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  background: ${COLORS.white};
`;

/**
 * LoadingInner
 * @type div
 */
export const LoadingInner = styled.div`
  margin: auto;
`;

/**
 * LoadingSpinner
 * @type div
 *
 * Styles the loading snipper to spin, infinitely
 */
export const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid ${SCHEME.primary};
  border-radius: 40px;
  border-bottom-color: transparent;
  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
