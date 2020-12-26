import styled from 'styled-components';
import { MEDIA_MIN } from 'utils/mediaQuery';

export const Wrapper = styled.div`
  display: flex;

  ${MEDIA_MIN.MD`
    flex-direction: column;
  `}
`;
