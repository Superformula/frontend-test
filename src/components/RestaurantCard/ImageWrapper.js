import styled from 'styled-components';
import { MEDIA_MIN } from 'utils/mediaQuery';
import { COLORS } from 'consts/colors';

export const ImageWrapper = styled.div`
  background-color: ${COLORS.GRAY_300};
  width: 116px;
  height: 132px;

  ${MEDIA_MIN.MD`
    width: 100%;
    height: 228px;
  `}
`;
