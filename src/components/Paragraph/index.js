import styled from 'styled-components';
import { COLORS } from 'consts/colors';
import { MEDIA_MIN } from 'utils/mediaQuery';

export const Paragraph = styled.p`
  color: ${COLORS.GRAY_700};
  max-width: 792px;
  font-size: 16px;
  line-height: 24px;

  ${MEDIA_MIN.MD`
    font-size: 22px;
    letter-spacing: .92px;
    font-weight: 300;
    line-height: 32px;
  `}
`;

Paragraph.displayName = 'Paragraph';
