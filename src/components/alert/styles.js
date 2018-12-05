/**
 * External Dependencies
 */
import styled from 'styled-components';

/**
 * Internal Dependencies
 */
import { Section, GridSection } from '../../helpers/global';
import { SCHEME, COLORS, ACTIONS } from '../../helpers/variables';

/**
 * AlertBannerItem
 * @type GridSection
 */
export const AlertBannerItem = styled(GridSection)`
  position: fixed;
  top: 4rem;
  left: calc(100vw - 75vw);
  width: 50vw;
  display: ${(props) => (props.show) ? 'grid' : 'none'};
  background: ${COLORS.white};
  border-radius: 8px;
  padding: 14px 1.5rem;
  transform: scale(0);
  animation: scaleUp 0.25s linear 0.2s 1 forwards;
  transition: 0.25s all ease-in;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }

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

  @media screen and (max-width: 1040px) {
    left: calc(100vw - 77.5vw);
    width: 55vw;
  }

  @media screen and (max-width: 824px) {
    left: calc(100vw - 85vw);
    width: 70vw !important;
  }
`;

/**
 * BannerIcon
 * @type div
 *
 * Styles the banner icon based on the type of
 * error. Ex: red on 'error' | green on 'success'
 */
export const BannerIcon = styled.div`
  background: ${(props) => (props.color === 'error')
    ? ACTIONS.error
    : (props.color === 'warning')
      ? ACTIONS.warning
      : (props.color === 'success')
        ? ACTIONS.success
        : ACTIONS.info
  };
  display: flex;
  border-radius: 50%;
  width: 50px;
  height: 50px;

  i {
    margin: auto;
    font-size: 20px;
    color: ${COLORS.white};
  }
`;

/**
 * BannerInfo
 * @type Section
 */
export const BannerInfo = styled(Section)`
  padding: 4px 0;
`;

/**
 * CloseBtn
 * @type button
 */
export const CloseBtn = styled.button`
  cursor: pointer;
  background: transparent;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  justify-self: end;
  transition: 0.15s all ease-in;

  i {
    margin: auto;
    color: ${COLORS.light};
    font-size: 18px;
  }

  &:hover {
    background: ${SCHEME.gray};

    i {
      color: ${COLORS.base};
    }
  }
`;
