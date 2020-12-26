import styled from 'styled-components';
import { MEDIA_MIN } from 'utils/mediaQuery';

export const UserWrapper = styled.div`
  display: flex;
  min-width: 304px;
  margin-bottom: 16px;

  ${MEDIA_MIN.MD`
    font-size: 22px;
    letter-spacing: 0.9px;
    margin-bottom: 0;
  `}
`;
