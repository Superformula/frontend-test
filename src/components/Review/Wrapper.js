import styled from 'styled-components';
import { MEDIA_MIN } from 'utils/mediaQuery';
import { COLORS } from 'consts/colors';

export const Wrapper = styled.div`
  display: block;
  padding-bottom: 40px;
  margin-bottom: 32px;
  border-bottom: 1px solid ${COLORS.GRAY_200};

  &:last-of-type {
    border-bottom: 0;
  }

  ${MEDIA_MIN.MD`
    display: flex;
    padding-bottom: 73px;
    margin-bottom: 84px;
  `}
`;
