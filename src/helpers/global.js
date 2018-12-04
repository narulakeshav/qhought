/**
 * @name: Global
 * @desc: Sets global styling for atomic elements and page
 * elements like h1, h2, h3, h4, h5, p, span, image, section,
 * page, and also includes css grid (check GridSection).
 *
 * @flow
 * Internal Dependencies
 */
import * as TextStyles from './styles/text';
import * as SectionStyles from './styles/section';
import * as HelperStyles from './styles/helpers';

// Export
export const { H1, H2, H3, H4, H5, Text, Span, StyledLink } = TextStyles;
export const { Page, Container, ContentWrapper, Section, GridSection } = SectionStyles;
export const { ButtonGroup, Img } = HelperStyles;
