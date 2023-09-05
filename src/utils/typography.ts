// Import the scaleFont function from the metrics module
import {scaleFont} from './metrics';

// FONT FAMILY
export const FONT_FAMILY_REGULAR: string = 'OpenSans-Regular';
export const FONT_FAMILY_BOLD: string = 'OpenSans-Bold';

// FONT WEIGHT
export const FONT_WEIGHT_REGULAR: string = '400';
export const FONT_WEIGHT_BOLD: string = '700';

// FONT SIZE
export const fontSizes = {
  FONT_SIZE_16: scaleFont(16), // Represents a scaled font size of 16
  FONT_SIZE_14: scaleFont(14), // Represents a scaled font size of 14
  FONT_SIZE_12: scaleFont(12), // Represents a scaled font size of 12
};

// LINE HEIGHT
export const LINE_HEIGHT_24: number = scaleFont(24); // Represents a scaled line height of 24
export const LINE_HEIGHT_20: number = scaleFont(20); // Represents a scaled line height of 20
export const LINE_HEIGHT_16: number = scaleFont(16); // Represents a scaled line height of 16

// FONT STYLE
export const FONT_REGULAR = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_BOLD = {
  fontFamily: FONT_FAMILY_BOLD,
  fontWeight: FONT_WEIGHT_BOLD,
};

// These comments provide an overview of the purpose of each constant
// and explain their values, such as font families, font weights, font sizes, and line heights.
