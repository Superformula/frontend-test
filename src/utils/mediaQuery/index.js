import { css } from 'styled-components';
import { BREAKPOINTS } from 'consts/screen';

const mediaQuery = type =>
  Object.keys(BREAKPOINTS).reduce((acc, label) => {
    acc[label] = (literals, ...placeholders) => css`
      @media (${type}-width: ${BREAKPOINTS[label]}px) {
        ${css(literals, ...placeholders)};
      }
    `;
    return acc;
  }, {});

export const MEDIA_MIN = mediaQuery('min');
export const MEDIA_MAX = mediaQuery('max');
