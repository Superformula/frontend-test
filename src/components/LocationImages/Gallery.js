import styled from 'styled-components';
import { MEDIA_MIN } from 'utils/mediaQuery';

export const Gallery = styled.div`
  width: 100%;
  display: inline-flex;
  overflow: scroll;
  padding: 0 24px;

  ${MEDIA_MIN.MD`
    overflow: unset;
    margin-bottom: 0px;
    padding: 0px;
  `}
`;
