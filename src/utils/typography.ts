import {scaleFont} from './metrics';

// FONT FAMILY
export const FONT_FAMILY_REGULAR: string = 'OpenSans-Regular';
export const FONT_FAMILY_BOLD: string = 'OpenSans-Bold';

// FONT WEIGHT
export const FONT_WEIGHT_REGULAR: string = '400';
export const FONT_WEIGHT_BOLD: string = '700';

// FONT SIZE
export const FONT_SIZE_16: number = scaleFont(16);
export const FONT_SIZE_14: number = scaleFont(14);
export const FONT_SIZE_12: number = scaleFont(12);

// LINE HEIGHT
export const LINE_HEIGHT_24: number = scaleFont(24);
export const LINE_HEIGHT_20: number = scaleFont(20);
export const LINE_HEIGHT_16: number = scaleFont(16);

// FONT STYLE
export const FONT_REGULAR = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_BOLD = {
  fontFamily: FONT_FAMILY_BOLD,
  fontWeight: FONT_WEIGHT_BOLD,
};
