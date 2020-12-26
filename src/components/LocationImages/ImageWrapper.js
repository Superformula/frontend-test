import styled from 'styled-components';
import { MEDIA_MIN } from 'utils/mediaQuery';
import { COLORS } from 'consts/colors';

export const ImageWrapper = styled.div`
  background-color: ${COLORS.GRAY_300};
  min-width: 229px;
  height: 171px;
  margin-right: 19px;

  ${MEDIA_MIN.MD`
    width: 304px;
    min-width: 304px;
    height: 228px;
    margin-right: 32px;
  `}
`;
