import styled from 'styled-components';
import { MEDIA_MIN } from 'utils/mediaQuery';
import { COLORS } from 'consts/colors';

export const Address = styled.p`
  color: ${COLORS.BLACK};
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 1px;
  margin: 0 24px;

  ${MEDIA_MIN.MD`
    font-size: 20px;
    line-height: 28px;
    font-weight: 300;
    margin: 0;
  `}
`;
