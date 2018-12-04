/**
 * External Dependencies
 */
import styled from 'styled-components';

/**
 * Internal Depedencies
 */
import { SCHEME, COLORS, FONT } from '../../helpers/variables';

export const HomeHeader = styled.nav`
  display: grid;
  grid-template-columns: 1fr 150px;
  padding: 10px 2.5rem;
  background: ${COLORS.white};
  box-shadow: 0 30px 40px -10px rgba(0,0,0,0.045);
  align-items: center;

  a {
    * {
      display: inline-block;
      vertical-align: middle;
    }

    h5 {
      position: relative;
      top: 3px;
    }
  }
`;

/**
 * GradientBtn
 * @type button
 */
export const GradientBtn = styled.button`
  background: linear-gradient(45deg, ${SCHEME.primary}, ${SCHEME.secondary});
  border-radius: 50px;
  height: 40px;
  padding: 6px 1.25rem;
  color: ${COLORS.white};
  font: 700 ${FONT.size - 4}px ${FONT.family};
  line-height: 100%;
  opacity: 0.85;
  transition: 0.15s all ease-in;
  cursor: pointer;

  &:hover {
    opacity: 1;
    transform: scale(1.02);
  }
`;

/**
 * CreateBtn
 * @type button
 *
 * Styles the button to let user create a
 * new quote
 */
export const CreateBtn = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 0;
  background: linear-gradient(45deg, ${SCHEME.primary}, ${SCHEME.secondary});
  padding: 10px 1rem 10px 0.25rem;
  border-radius: 40px 0 0 40px;
  transform: translateX(0.5rem);
  transition: 0.15s all ease-in;
  line-height: 100%;
  opacity: 0.75;
  cursor: pointer;

  i {
    width: 36px;
    font-weight: 700;
    font-size: 22px;
    color: ${COLORS.white};
    transition: 0.15s all ease-in;
  }

  &:hover {
    transform: translateX(0);
    opacity: 1;

    i {
      transform: translateX(5px);
    }
  }
`;
