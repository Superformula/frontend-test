import styled from 'styled-components';
import { MEDIA_MIN } from 'utils/mediaQuery';
import { COLORS } from 'consts/colors';

export const Name = styled.p`
  color: ${COLORS.BLACK};
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.9px;
  letter-spacing: 0.75px;
  margin-bottom: 4px;

  ${MEDIA_MIN.MD`
    font-size: 22px;
    letter-spacing: 0.9px;
    margin-bottom: 6px;
  `}
`;
