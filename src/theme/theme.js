// Grays are derived from their percentage of black
// eg: black60 is 60% black or rgba(0,0,0,0.6)
const colors = {
  black: '#000000',
  black80: '#333333',
  black60: '#666666',
  black54: '#757575',
  black41: '#979797',
  black21: '#C8C8C8',
  black15: '#D8D8D8',
  black10: '#E6E6E6',
  primary: '#002B56',
  secondary: '#FFFFFF',
  green: '#00E8A4',
  red: '#FF3548',
  white: '#FFFFFF',
};

// Font sizes are based off a 16px base
const fontSizes = [
  '.75rem', // 12px
  '.875rem', // 14px
  '1rem', // 16px
  '1.25rem', // 20px
  '1.375rem', // 22px
  '1.5rem', // 24px
  '2.125rem', // 34px
  '3.375rem', // 54px
];

const fonts = [
  '"HelveticaNeue", "Helvetica Neue", "Helvetica", "Tahoma", "Geneva", "Arial"',
  '"HelveticaNeueLight", "HelveticaNeue-Light", "Helvetica Neue Light", "HelveticaNeue", "Helvetica Neue", "Helvetica", "Tahoma", "Geneva", "Arial", sans-serif',
  '"HelveticaNeueMedium", "HelveticaNeue-Medium", "Helvetica Neue Medium", "Helvetica", "Tahoma", "Geneva", "Arial", sans-serif;',
];

const buttons = {
  primary: {
    color: colors.white,
    backgroundColor: colors.primary,
    border: '1px solid',
    borderColor: colors.primary,
    fontFamily: fonts[0],
    fontWeight: 400,
    '&:hover:not(:disabled)': {
      color: colors.primary,
      backgroundColor: colors.white,
    },
    '&:disabled': {
      color: colors.black21,
      backgroundColor: colors.black10,
      borderColor: colors.black10,
    },
  },
  secondary: {
    color: colors.primary,
    backgroundColor: colors.secondary,
    border: '1px solid',
    borderColor: colors.primary,
    fontFamily: fonts[2],
    fontWeight: 500,
    '&:hover:not(:disabled)': {
      color: colors.white,
      backgroundColor: colors.primary,
    },
    '&:disabled': {
      color: colors.black21,
      backgroundColor: colors.secondary,
      borderColor: colors.black10,
    },
  },
};

export default {
  // Spaces support an 8pt grid
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  colors,
  fontSizes,
  fonts,
  buttons,
};
