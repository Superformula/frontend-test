import styled from 'styled-components';
import { MEDIA_MIN } from 'utils/mediaQuery';

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 12px;

  ${MEDIA_MIN.MD`
    margin-left: 0;
  `}
`;
