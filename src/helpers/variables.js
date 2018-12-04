/**
 * @name: Variables
 * @desc: Contains color scheme and default variables
 * for styling. Updating this will cause the styles
 * such as color or font to change.
 *
 * @flow
 */

/**
 * Local Variables
 */
// Scheme
export const SCHEME = {
  primary: '#FF7816',
  primaryLight: '#FFEFE4',
  secondary: '#FF4B00',
  gray: '#F7F8F9',
  dark: '#062849',
  shadow: '#EBECF2',
};

// Text Colors
export const COLORS = {
  lighter: '#BFC2CC',
  light: '#878C9C',
  base: '#606374',
  dark: '#373F52',
  darker: '#262D38',
  white: '#FFFFFF'
};

// Actions Colors (Error, Success, etc.)
export const ACTIONS = {
  success: '#2ECC71',
  error: '#FF3769',
  warning: '#FFB300',
  info: '#00B0FF',
};

// Font
export const FONT = {
  family: `${[
    'Carter One',
    'sans-serif',
    '-apple-system',
    'BlinkMacSystemFont',
    'Helventica Neue',
    'Roboto'
  ].join(',')}`,
  size: 20
};
