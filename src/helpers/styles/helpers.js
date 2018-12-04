/**
 * @flow
 *
 * External Dependencies
 */
import styled from 'styled-components';

/**
 * ButtonGroup Component
 * @type Section
 *
 * Wraps multiple items inside
 */
export const ButtonGroup = styled.section`
  padding: 1.5rem 0;

  @media screen and (max-width: 925px) {
    padding: 1rem 0 1.5rem;

    * {
      margin-top: 0.5rem;
    }
  }
`;

/**
 * Img Component
 * @type img
 *
 * @prop {string} display: [block|inline|inline-block]
 * @prop {string} padding: adds padding to image
 * @prop {number} width: set width for image
 * @prop {number} mobileWidth: set width for image in mobile
 * @prop {string | boolean} margin = string; margin[Direction] = boolean
 * @prop {string} mobileMargin: adds margin on mobile
 * @prop {boolean} float: [left|right]
 * @prop {boolean} rounded: makes the image round
 * @prop {boolean} mobileNoDisplay: do not show on mobile
 */
export const Img = styled.img`
  pointer-events: none;
  display: ${(props) => (props.display) ? props.display : 'inline-block'};
  padding: ${(props) => (props.padding) ? props.padding : '0'};
  width: ${(props) => (props.width && typeof props.width === 'number')
    ? `${props.width}%`
    : (props.width && typeof props.width === 'string')
      ? `${props.width}px`
      : 'auto'
  };

  height: ${(props) => (props.height) ? `${props.height}px` : 'auto'};

  border-radius: ${(props) => (props.rounded)
    ? '50%'
    : (props.radius)
      ? props.radius
      : '0'
  };

  box-shadow: ${(props) => (props.hasShadow)
    ? '0 10px 47px rgba(226,227,233,0.8)'
    : 'none'
  };

  border: ${(props) => (props.bordered)
    ? '1px solid rgba(0,0,0,0.1)'
    : 'none'
  };

  margin: ${(props) => (props.margin)
      ? props.margin
      : (props.width)
        ? `0 ${(100 - props.width) / 2}%`
        : (props.marginLeft)
          ? '0 auto 0 0'
          : (props.marginRight)
            ? '0 0 0 auto'
            : '0 auto'
  };
  float: ${(props) => (props.floatLeft)
    ? 'left'
    : (props.floatRight)
      ? 'right'
      : 'none'
  };

  @media screen and (max-width: 925px) {
    display: inline-block;
    width: ${(props) => (props.mobileWidth)
      ? `${props.mobileWidth}px`
      : '100%'
    };
    margin: ${(props) => (props.mobileMargin)
      ? props.mobileMargin
      : '0'
    };
  }

  @media screen and (max-width: 768px) {
    display: ${(props) => (props.mobileNoDisplay)
      ? 'none'
        : (props.display)
          ? props.display
          : 'inline-block'
    };
  }
`;

/**
 * VideoWrapper component
 * @type div
 *
 * The video outer container wrapper. This makes
 * sure the video maintains a 16:9 view ratio.
 */
export const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 0;
  height: 0;
`;

/**
 * Video component
 * @type iframe
 *
 * Styles the actual video component.
 */
export const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
