import styled from 'styled-components';
import { MEDIA_MIN } from 'utils/mediaQuery';
import { COLORS } from 'consts/colors';

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 0 39px;
  margin-top: 40px;
  margin-bottom: 40px;
  border-bottom: 1px solid ${COLORS.GRAY_200};

  ${MEDIA_MIN.MD`
    display: inline-flex;
    border-top: 1px solid ${COLORS.GRAY_200};
    overflow: scroll;
    padding: 48px 64px;
    margin-top: 50px;
    margin-bottom: 50px;
  `}
`;
