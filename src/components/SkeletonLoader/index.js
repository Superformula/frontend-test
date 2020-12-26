import styled, { keyframes } from 'styled-components';
import { COLORS } from 'consts/colors';

const loadingBackground = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 51%; }
  100% { background-position: 0% 50%; }
`;

export const SkeletonLoader = styled.span.attrs({
  role: 'progressbar',
  dangerouslySetInnerHTML: { __html: '&nbsp;' },
})`
  display: inline-block;
  line-height: 1;
  width: 100%;
  height: 100%;
  color: transparent;

  background: ${COLORS.GRAY_300};
  background: linear-gradient(90deg, ${COLORS.GRAY_300}, ${COLORS.GRAY_100});
  background-size: 400% 400%;
  animation: ${loadingBackground} 2s ease infinite;
`;
