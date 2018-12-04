/**
 * @flow
 *
 * External Dependencies
 */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

/**
 * Internal Dependencies
 */
import { SCHEME, COLORS, ACTIONS, FONT } from '../variables';

/* *************************************************/
/* ********************* HELPERS *******************/
/* *************************************************/
export const setTextColor = (props: Object, defaultColor?: string) => (props.color) ? props.color
    : (props.textPrimary) ? SCHEME.primary
      : (props.textSecondary) ? SCHEME.secondary
        : (props.textGray) ? SCHEME.gray
          : (props.textWhite) ? COLORS.white
            : (props.textLighter) ? COLORS.lighter
              : (props.textLight) ? COLORS.light
                : (props.textDark) ? COLORS.dark
                  : (props.textDarker) ? COLORS.darker
                    : (props.textError) ? ACTIONS.error
                      : (props.textSuccess) ? ACTIONS.success
                        : (props.textWarning) ? ACTIONS.warning
                          : (props.textInfo) ? ACTIONS.info
                            : (props.darkOpacity) ? `rgba(0,0,0,${props.darkOpacity})`
                              : (props.lightOpacity) ? `rgba(255,255,255,${props.lightOpacity})`
                                : defaultColor || COLORS.base;

export const setFontWeight = (props: Object, defaultWeight: string = '500') => (props.weightHeavy) ? '800'
    : (props.weightBold) ? '700'
      : (props.weightSemiBold) ? '600'
        : (props.weightNormal) ? '400'
          : (props.weightLight) ? '300'
            : defaultWeight;

/** ************************************************/
/** ***************** FONT STYLING *****************/
/** ************************************************/

/**
 * H1 Component
 * @type h1
 */
export const H1 = styled.h1`
  color: ${(props) => setTextColor(props, COLORS.dark)};
  font-weight: ${(props) => setFontWeight(props, '800')};
  font-size: ${FONT.size * 3.25}px;
  font-family: ${(props) => (props.fontSans)
    ? 'sans-serif'
    : FONT.family
  };
  font-style: ${(props) => (props.italic) ? 'italic' : 'normal'};
  text-transform: ${(props) => (props.uppercase) ? 'uppercase' : 'none'};
  margin-bottom: ${(props) => (props.marginBottom) ? '8px' : '0'};
  line-height: ${(props) => (props.lineHeight) ? `${props.lineHeight}%` : '100%'};

  span {
    font-weight: ${(props) => setFontWeight(props, '800')};
  }

  @media screen and (max-width: 925px) {
    font-size: ${FONT.size * 2.25}px;
  }
`;

/**
 * H2 Component
 * @type h2
 */
export const H2 = styled.h2`
  color: ${(props) => setTextColor(props, COLORS.dark)};
  font-weight: ${(props) => setFontWeight(props, '700')};
  font-size: ${FONT.size * 2.75}px;
  font-family: ${(props) => (props.fontSans)
    ? 'sans-serif'
    : FONT.family
  };
  font-style: ${(props) => (props.italic) ? 'italic' : 'normal'};
  text-transform: ${(props) => (props.uppercase) ? 'uppercase' : 'none'};
  margin-bottom: ${(props) => (props.marginBottom) ? '16px' : '0'};
  line-height: ${(props) => (props.lineHeight) ? `${props.lineHeight}%` : '100%'};

  span {
    font-weight: ${(props) => setFontWeight(props, '700')};
  }

  @media screen and (max-width: 925px) {
    font-size: ${FONT.size * 1.75}px;
  }
`;

/**
 * H3 Component
 * @type h3
 */
export const H3 = styled.h3`
  color: ${(props) => setTextColor(props, COLORS.dark)};
  font-weight: ${(props) => setFontWeight(props, '700')};
  font-size: ${FONT.size * 2}px;
  font-family: ${(props) => (props.fontSans)
    ? 'sans-serif'
    : FONT.family
  };
  font-style: ${(props) => (props.italic) ? 'italic' : 'normal'};
  text-transform: ${(props) => (props.uppercase) ? 'uppercase' : 'none'};
  margin-bottom: ${(props) => (props.marginBottom) ? '8px' : '0'};
  line-height: ${(props) => (props.lineHeight) ? `${props.lineHeight}%` : '100%'};

  span {
    font-weight: ${(props) => setFontWeight(props, '700')};
  }

  @media screen and (max-width: 925px) {
    font-size: ${FONT.size * 1.35}px;
  }
`;

/**
 * H4 Component
 * @type h4
 */
export const H4 = styled.h4`
color: ${(props) => setTextColor(props, COLORS.dark)};
  font-weight: ${(props) => setFontWeight(props, '700')};
  font-size: ${FONT.size * 1.5}px;
  font-family: ${(props) => (props.fontSans)
    ? 'sans-serif'
    : FONT.family
  };
  font-style: ${(props) => (props.italic) ? 'italic' : 'normal'};
  text-transform: ${(props) => (props.uppercase) ? 'uppercase' : 'none'};
  margin-bottom: ${(props) => (props.marginBottom) ? '8px' : '0'};
  line-height: ${(props) => (props.lineHeight) ? `${props.lineHeight}%` : '100%'};

  span {
    font-weight: ${(props) => setFontWeight(props, '700')};
  }

  @media screen and (max-width: 925px) {
    font-size: ${FONT.size * 1.15}px;
    }
`;

/**
 * H5 Component
 * @type h5
 */
export const H5 = styled.h5`
  color: ${(props) => setTextColor(props, COLORS.dark)};
  font-weight: ${(props) => setFontWeight(props, '600')};
  font-size: ${FONT.size * 1.15}px;
  font-family: ${(props) => (props.fontSans)
    ? 'sans-serif'
    : FONT.family
  };
  font-style: ${(props) => (props.italic) ? 'italic' : 'normal'};
  text-transform: ${(props) => (props.uppercase) ? 'uppercase' : 'none'};
  margin-bottom: ${(props) => (props.marginBottom) ? '8px' : '0'};
  line-height: ${(props) => (props.lineHeight) ? `${props.lineHeight}%` : '100%'};

  span {
    font-weight: ${(props) => setFontWeight(props, '600')};
  }

  @media screen and (max-width: 925px) {
    font-size: ${FONT.size * 1.05}px;
  }
`;

/**
 * Text Component
 * @type p (paragraph)
 *
 * @prop {boolean} text:
 * [primary|secondary|gray|white|lighter|light|dark|error|success|warning|info|base]
 * @prop {boolean} weight: [heavy|bold|semibold|normal|light]
 * @prop {boolean} uppercase: set case to UPPERCASE?
 * @prop {boolean} italic: set case to italic?
 * @prop {boolean} marginBottom: add margin to bottom?
 * @prop {number} fontSize: set font-size to this if provided
 * @prop {number} lineHeight: set line-height to this if provided
 * @prop {number} width: set width to this if provided
 * @prop {boolean} alignCenter: align <p> to center?
 * @prop {boolean} alignRight: align <p> to right?
 * @prop {boolean} marginCenter: set <p> center, horizontally?
 * @prop {boolean} marginTop: add margin to top?
 * @prop {boolean} marginBottom: add margin to bottom?
 */
export const Text = styled.p`
  color: ${(props) => setTextColor(props)};

  font-weight: ${(props) => setFontWeight(props, '400')};
  font-size: ${(props) => (props.fontSize) ? `${props.fontSize}px` : `${FONT.size}px`};
  font-family: ${(props) => (props.fontSans)
    ? 'sans-serif'
    : FONT.family
  };
  font-style: ${(props) => (props.italic) ? 'italic' : 'normal'};
  line-height: ${(props) => (props.lineHeight) ? `${props.lineHeight}%` : '150%'};

  margin: ${(props) => (props.marginCenter) ? '0 auto' : '0'};
  margin-top: ${(props) => (props.marginTop) ? '16px' : '0'};
  margin-bottom: ${(props) => (props.marginBottom) ? '8px' : '0'};

  width: ${(props) => (props.width) ? `${props.width}%` : 'auto'};

  text-transform: ${(props) => (props.uppercase) ? 'uppercase' : 'none'};
  text-align: ${(props) => (props.alignCenter) ? 'center'
    : (props.alignRight) ? 'right' : 'left'
  };
  text-shadow: ${(props) => (props.hasShadow)
    ? '0 1px 3px rgba(0,0,0,0.1)'
    : 'none'
  };

  strong {
    font-weight: 700;
  }

  img {
    max-width: 100%;
  }

  a {
    color: ${SCHEME.primary};
  }

  @media screen and (max-width: 925px) {
    width: ${(props) => (props.mobileWidth)
      ? `${props.mobileWidth}%`
      : '100%'
    };

    font-size: ${(props) => (props.mobileFontSize)
      ? `${(props.mobileFontSize)}px`
      : (props.fontSize)
        ? `${(props.fontSize)}px`
        : `${FONT.size}px`
    };
  }
`;

/**
 * Span Component
 * @type Span
 *
 * @prop {boolean} text: [primary|secondary|gray|white|lighter|light|base]
 * @prop {boolean} weight: [heavy|bold|semibold|normal|light]
 * @prop {boolean} uppercase: set case to UPPERCASE?
 * @prop {boolean} italic: set case to italic?
 * @prop {boolean} marginBottom: add margin to bottom?
 */
export const Span = styled.span`
  color: ${(props) => setTextColor(props)};
  font-weight: ${(props) => setFontWeight(props, '400')};
  text-transform: ${(props) => (props.uppercase) ? 'uppercase' : 'none'};
  font-style: ${(props) => (props.italic) ? 'italic' : 'normal'};
`;

/**
 * StyledLink Component
 * @type Link
 *
 * @prop {boolean} displayBlock: sets display to block
 * @prop {boolean} text: [primary|secondary|gray|white|lighter|light|base]
 * @prop {boolean} weight: [heavy|bold|semibold|normal|light]
 * @prop {boolean} uppercase: set case to UPPERCASE?
 * @prop {boolean} italic: set case to italic?
 * @prop {boolean} marginBottom: add margin to bottom?
 */
export const StyledLink = styled(Link)`
  color: ${(props) => setTextColor(props)};
  display: ${(props) => (props.displayBlock) ? 'block' : 'inline-block'};

  font-weight: ${(props) => setFontWeight(props, '400')};
  font-size: ${(props) => (props.fontSize) ? `${props.fontSize}px` : `${FONT.size}px`};
  font-family: ${(props) => (props.fontSans)
    ? 'sans-serif'
    : FONT.family
  };
  font-style: ${(props) => (props.italic) ? 'italic' : 'normal'};

  margin: ${(props) => (props.margin) ? props.margin : '0'};
  margin-top: ${(props) => (props.marginTop) ? '12px' : '0'};
  margin-bottom: ${(props) => (props.marginBottom) ? '12px' : '0'};

  text-transform: ${(props) => (props.uppercase) ? 'uppercase' : 'none'};
  text-align: ${(props) => (props.alignCenter)
    ? 'center'
    : (props.alignRight)
      ? 'right'
      : 'left'
  };

  transition: 0.15s all ease-in;

  &:hover {
    opacity: 0.8;
  }
`;
