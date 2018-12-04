/**
 * External Dependencies
 */
import styled from 'styled-components';
import Textarea from 'react-textarea-autosize';

/**
 * Internal Dependencies
 */
import { COLORS, SCHEME, FONT } from '../../helpers/variables';
import { GridSection } from '../../helpers/global';

/**
 * QuoteBg
 * @type div
 */
export const QuoteBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.bg};
`;

/**
 * QuoteEditor
 * @type form
 *
 * Inner container that lets user edit the quote
 */
export const QuoteEditor = styled.form`
  position: relative;
  top: -4rem;
  margin: auto 10vw;
  width: 100%;
  text-align: left;

  @media screen and (max-width: 1040px) {
    margin: auto 5vw;
  }
`;

/**
 * QuoteAuthorInput
 * @type input
 */
export const QuoteAuthorInput = styled.input`
  display: block;
  background: transparent;
  margin-bottom: 10px;
  color: ${COLORS.white};
  font: 500 ${FONT.size}px Georgia;
  border: none;

  &:focus {
    outline: 0;
  }
`;

/**
 * QuoteInput
 * @type Textarea
 */
export const QuoteInput = styled(Textarea)`
  display: block;
  background: transparent;
  color: ${COLORS.white};
  font: 700 ${FONT.size * 2.5}px ${FONT.family};
  border: none;
  width: 100%;

  &:focus {
    outline: 0;
  }

  @media screen and (max-width: 1040px) {
    font-size: ${FONT.size * 1.5}px;
  }
`;

/**
 * QuoteCreationFooter
 * @type GridSection
 */
export const QuoteCreationFooter = styled(GridSection)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  padding: 2rem 10vw;
  background: linear-gradient(180deg, rgba(0,0,0,0) 5%, rgba(0,0,0,1));

  @media screen and (max-width: 1040px) {
    padding: 2rem 5vw;
  }
`;

/**
 * QuoteTagList
 * @type ul
 *
 * Displays list of tags on larger screens
 */
export const QuoteTagList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    float: left;
  }

  @media screen and (max-width: 1040px) {
    display: none;
  }
`;

/**
 * QuoteTagItem
 * @type span
 */
export const QuoteTagItem = styled.span`
  background: rgba(255,255,255,0.2);
  border-radius: 40px;
  padding: 3px 16px;
  font: 100 ${FONT.size - 3}px ${FONT.family};
  color: ${COLORS.white};
  margin-right: 8px;
`;

/**
 * QuoteTagsInput
 * @type input
 */
export const QuoteTagsInput = styled.input`
  display: block;
  background: transparent;
  border: 2px solid ${COLORS.white};
  border-radius: 40px;
  height: 40px;
  padding: 0 1rem;
  font: 700 ${FONT.size - 4}px sans-serif;
  color: ${COLORS.white};

  &:focus {
    outline: 0;
  }
`;

/**
 * QuoteCreateBtn
 * @type button
 */
export const QuoteCreateBtn = styled.button`
  background: linear-gradient(45deg, ${SCHEME.primary}, ${SCHEME.secondary});
  border-radius: 50px;
  height: 40px;
  width: 100%;
  padding: 6px 1.25rem;
  color: ${COLORS.white};
  font: 700 ${FONT.size - 4}px ${FONT.family};
  line-height: 100%;
  opacity: 0.85;
  transition: 0.15s all ease-in;
  cursor: pointer;

  i {
    vertical-align: middle;
    margin-left: 8px;
    font-size: 16px;
    font-weight: 700;
  }

  &:hover {
    opacity: 1;
    transform: scale(1.02);
  }
`;
