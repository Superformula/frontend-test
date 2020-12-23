import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { MEDIA_MIN } from '../../utils/mediaQuery';

export const H1 = styled.h1`
  color: ${COLORS.GRAY_900};
  font-weight: 300;
  font-size: 32px;
  line-height: 40px;
  margin-bottom: 9px;

  ${MEDIA_MIN.MD`
    font-size: 54px;
    line-height: 64px;
    letter-spacing: .96px;
    margin-bottom: 24px;
  `}
`;