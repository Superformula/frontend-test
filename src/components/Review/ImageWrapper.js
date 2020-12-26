import styled from 'styled-components';
import { MEDIA_MIN } from 'utils/mediaQuery';
import { COLORS } from 'consts/colors';

export const ImageWrapper = styled.div`
  background-color: ${COLORS.GRAY_300};
  width: 64px;
  height: 64px;
  margin-right: 18px;

  ${MEDIA_MIN.MD`
    width: 80px;
    height: 80px;
    margin-right: 32px;
  `}
`;
