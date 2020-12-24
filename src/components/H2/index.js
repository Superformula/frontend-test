import styled from 'styled-components';
import { COLORS } from 'consts/colors';
import { MEDIA_MIN } from 'utils/mediaQuery';

export const H2 = styled.h2`
  color: ${COLORS.GRAY_900};
  font-weight: 300;
  font-size: 32px;
  line-height: 40px;
  margin: 32px 0;
  letter-spacing: 1px;

  ${MEDIA_MIN.MD`
    font-size: 34px;
    margin-top: 65px;
    margin-bottom: 42px;
  `}
`;
