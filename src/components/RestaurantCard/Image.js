import styled from 'styled-components';
import { COLORS } from 'consts/colors';
import { MEDIA_MIN } from 'utils/mediaQuery';

export const Image = styled.img`
  background-color: ${COLORS.GRAY_300};
  object-fit: cover;
  width: 116px;
  height: 132px;

  ${MEDIA_MIN.MD`
    width: 100%;
    height: 228px;
  `}
`;
