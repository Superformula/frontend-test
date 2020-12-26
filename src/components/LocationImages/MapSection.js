import styled from 'styled-components';
import { MEDIA_MIN } from 'utils/mediaQuery';

export const MapSection = styled.div`
  width: 100%;
  margin-bottom: 40px;

  ${MEDIA_MIN.MD`
    margin-right: 32px;
    margin-bottom: 0px;
  `}
`;
