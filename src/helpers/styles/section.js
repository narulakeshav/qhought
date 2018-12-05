/**
 * @flow
 *
 * External Dependencies
 */
import styled from 'styled-components';

/**
 * Page Component
 * @type Div
 */
export const Page = styled.div`
  padding: 0;
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  background: ${(props) => (props.bg) ? props.bg : 'none'};
  max-height: ${(props) => (props.lockScroll)
    ? '100vh'
    : 'auto'
  };
`;

/**
 * Container Component
 * @type div
 *
 * Wraps all the ContentWrapper, Section,
 * and GridSection
 */
export const Container = styled.div`
  background: ${(props) => (props.bg && props.bgURL)
    ? `url(${props.bgURL}), ${props.bg}`
    : (props.bgGradient && props.bgURL)
      ? `url(${props.bgURL}), linear-gradient(${props.bgGradient})`
      : (props.bg)
      ? props.bg
      : (props.bgURL)
        ? `url(${props.bgURL}) no-repeat`
        : (props.bgGradient)
        ? `linear-gradient(${props.bgGradient})`
        : 'none'
  };
  background-size: ${(props) => (props.containBg) ? 'contain' : 'cover'};
  background-repeat: no-repeat;
  padding: 0;
  border-top: ${(props) => (props.borderTop)
    ? (props.bg === '#FFFFFF')
      ? '1px solid #EDEFF5'
      : '1px solid #E4E5E9'
    : 'none'
  };
  overflow-x: hidden;

  @media screen and (max-width: 925px) {
    background: ${(props) => (props.bgMobile) ? props.bgMobile
      : (props.bgGradient) ? `linear-gradient(${props.bgGradient})`
      : (props.bg) ? props.bg
        : 'none'
    };
  }
`;

/**
 * ContentWrapper component
 * @type section
 *
 * Sets a max width on content
 */
export const ContentWrapper = styled.section`
  max-width: 1100px;
  margin: 0 auto;

  @media screen and (max-width: 1580px) {
    max-width: 80%;
  }

  @media screen and (max-width: 1400px) {
    max-width: 90%;
  }
`;

/**
 * Section Component
 * @type Section
 *
 * @prop {string} bg: custom HEXCODE (#FFFFFF)
 * @prop {boolean} alignCenter: align text to center?
 * @prop {boolean} alignRight: align text to right?
 * @prop {string} padding: add padding to section
 * @prop {string} mobilePadding: add padding to section (on mobile)
 * @prop {string} tabletPadding: add padding to section (on tablets)
 */
export const Section = styled.section`
  background: ${(props) => (props.bg) ? props.bg : 'none'};
  border-radius: ${(props) => (props.borderRadius) ? `${props.borderRadius}px` : '0'};
  padding: ${(props) => (props.padding) ? props.padding : '0'};
  max-width: ${(props) => (props.maxWidth) ? props.maxWidth : 'none'};
  text-align: ${(props) => (props.alignCenter) ? 'center'
    : (props.alignRight) ? 'right' : 'left'
  };

  @media screen and (max-width: 1040px) {
    padding: ${(props) => (props.tabletPadding) ? props.tabletPadding : props.padding};
  }

  @media screen and (max-width: 824px) {
    background: ${(props) => (props.bgMobile) ? props.bgMobile
      : (props.bgGradient) ? `linear-gradient(${props.bgGradient})`
      : (props.bg) ? props.bg
        : 'none'
  };

  max-width: 100%;
    padding: ${(props) => (props.mobilePadding) ? props.mobilePadding : props.padding};
  }
`;

/**
 * GridSection Component
 * @extends Section
 *
 * @prop {string} split: split columns with this config
 * @prop {string} tabletSplit: add split to section (on tablet)
 * @prop {string} mobileSplit: split columns (on mobile)
 * @prop {string} gap: add grid-gap (gutter)
 * @prop {string} tabletGap: add gap to section (on tablet)
 * @prop {string} width: set grid section width
 * @prop {string} tabletWidth: add width to section (on tablet)
 * @prop {string} mobileWidth: set width (on mobile)
 * @prop {string} margin: sets margin to the Grid Section
 * @prop {string} padding: add padding to section
 * @prop {string} mobilePadding: add padding to section (on mobile)
 * @prop {string} tabletPadding: add padding to section (on tablet)
 * @prop {boolean} alignVertically: align items vertically centered?
 * @prop {boolean} alignBottom: align items to bottom?
 * @prop {boolean} justifyCenter: justifies all the children center
 * @prop {boolean} sameHeightChildren: set same height to all children
 */
export const GridSection = styled(Section)`
  display: grid;
  grid-template-columns: ${(props) => (props.split) ? props.split : '1fr 1fr'};
  grid-gap: ${(props) => (props.gap) ? props.gap : '0'};
  grid-auto-rows: ${(props) => (props.sameHeightChildren) ? '1fr' : 'auto'};
  justify-items: ${(props) => (props.justifyCenter)
    ? 'center'
      : (props.justifyEnd)
        ? 'end'
        : 'stretch'
  };
  width: ${(props) => (props.width) ? `${props.width}%` : 'auto'};
  padding: ${(props) => (props.padding) ? props.padding : '0'};

  margin: ${(props) => (props.margin) ? props.margin
    : (props.width) ? '0 auto'
      : 'auto'
  };

  align-items: ${(props) => (props.sameHeightChildren)
    ? 'stretch'
    : (props.alignVertically)
      ? 'center'
      : (props.alignBottom)
      ? 'end'
      : 'start'
  };

  @media screen and (max-width: 1040px) {
    width: ${(props) => (props.tabletWidth) ? `${props.tabletWidth}%` : '100%'};

    grid-template-columns: ${(props) => (props.tabletSplit)
      ? props.tabletSplit
      : (props.split)
        ? props.split
        : '1fr 1fr'
    };

    grid-gap: ${(props) => (props.tabletGap)
      ? props.tabletGap
        : (props.gap)
        ? props.gap
        : '0'
    };
  }

  @media screen and (max-width: 824px) {
    padding: ${(props) => (props.mobilePadding)
      ? props.mobilePadding
      : props.padding
  };

  grid-auto-rows: auto;

  grid-template-columns: ${(props) => (props.mobileSplit)
    ? props.mobileSplit
    : (props.split)
      ? props.split
      : '1fr 1fr'
  };

  grid-gap: ${(props) => (props.mobileGap)
    ? props.mobileGap
    : (props.gap)
    ? props.gap
    : '0'
  };

  width: ${(props) => (props.mobileWidth)
    ? `${props.mobileWidth}%`
    : '100% !important'
  };

  justify-items: ${(props) => (props.mobileJustifyDefault)
    ? 'stretch'
    : (props.justifyCenter)
      ? 'center'
      : 'stretch'
    };
  }
`;
